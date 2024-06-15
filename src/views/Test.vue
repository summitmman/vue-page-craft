<template>
    <div>
      <PageCrafter
        v-model:page="currentPage"
        :widgetMap="widgetMap"
        :eventMap="eventMap"
        :reactiveVariableMap="reactiveVariableMap"
        :route="route"
        :router="router"
        @no-schema="requestSchema"
      />
      <div>
        Outside page crafter
        <input type="text" class="random-native-input block" v-model="singleName" />
        {{ singleName }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineAsyncComponent, ref, Ref, ComputedRef, computed } from 'vue';
  import PageCrafter from '../pageCrafter/PageCrafter.vue';
  import { IPage, GenericObject, EventMap } from '../pageCrafter/shared/interfaces';
  import { NavigationType } from '../pageCrafter/shared/enums';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();
  
  const singleName = ref('optical fiber');
  const widgetMap = {
    Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
    Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
  };
  
  const page: IPage = {
    id: 'sample-page',
    initialData: {
      name: 'Hello',
      surname: 'World'
    },
    route: {
        path: '/path1',
        navigationType: NavigationType.Replace
    },
    children: [
      {
        type: 'div',
        props: {
          class: 'my-div'
        },
        children: [
          'Hello World',
          {
            type: 'button',
            props: {
              class: 'native-btn ml-4'
            },
            events: {
              click: 'handleAppClick'
            },
            children: [
              'Nested Click me'
            ]
          }
        ]
      },
      {
        type: 'button',
        props: {
          class: 'native-btn'
        },
        events: {
          click: 'handleAppClick'
        },
        children: [
          'Click me'
        ]
      },
      {
        id: 'customButton',
        type: 'Button',
        events: {
          click: 'handleAppCustomClick'
        },
        children: [
          'Custom button'
        ]
      },
      {
        type: 'p',
        props: {
          class: 'mt-5'
        },
        children: [    
          {
            type: 'Name',
            props: {
              type: 'text',
              'v-model': '{{ name }}',
              'v-model:surname': '{{ surname }}',
              'singleName': '{{ singleName }}'
            },
            events: {
              change: 'handleChange'
            }
          },
          'This is the {{ name }} life {{ surname }} {{ singleName }}',
          {
            type: 'Button',
            props: {
              class: 'block'
            },
            events: {
              click: 'handleAppCustomClick'
            },
            children: [
              'Custom button'
            ]
          }
        ]
      },
      {
        type: 'div',
        props: {
          class: 'my-div'
        },
        children: [
          {
            type: 'h3',
            children: [
              'v-if example',
            ]
          },
          {
            type: 'v-if',
            props: {
              condition: '{{ singleNameLength }}',
              vElseChildren: [
                {
                  type: 'v-if',
                  props: {
                    condition: '{{ name }}',
                    vElseChildren: [
                      'This text shows when both singleNameLength and name are invalid'
                    ]
                  },
                  children: [
                    'This text only shows when singleNameLength is invalid and name: {{ name }} is valid'
                  ]
                }
              ]
            },
            children: [
              'This text only shows when singleNameLength: {{ singleNameLength }} is a valid',
            ]
          },
        ]
      },
      {
        type: 'div',
        props: {
          class: 'my-div'
        },
        children: [
          {
            type: 'h3',
            children: [
              'v-for example'
            ]
          },
          {
            type: 'v-for',
            props: {
              id: 'looping',
              loopOn: '{{ cities }}'
            },
            children: [
              {
                type: 'div',
                children: [
                  'This is element {{ loopingItem.name }} at position {{ loopingIndex }} : {{ name }}'
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'submitButton',
        type: 'Button',
        events: {
          click: 'onSubmit'
        },
        children: [
          'Submit to next page'
        ]
      }
    ]
  };
  const page2: IPage = {
    id: 'page 2',
    route: {
      path: '/path2',
      navigationType: NavigationType.Push
    },
    children: [
      {
        type: 'h1',
        children: [
          'This is page 2'
        ]
      },
      {
        id: 'submitButton',
        type: 'Button',
        events: {
          click: 'onSubmitPage2'
        },
        children: [
          'Submit to next page'
        ]
      }
    ]
  };
  const page3: IPage = {
    id: 'page 3',
    route: {
      path: '/path3',
      navigationType: NavigationType.Push
    },
    children: [
      {
        type: 'h1',
        children: [
          'This is page 3'
        ]
      }
    ]
  };
  const currentPage = ref(page);
  const eventMap: EventMap = (reactiveVariables: GenericObject<Ref | ComputedRef>): GenericObject<Function> => ({
    handleAppClick: () => {
      alert('Hello World');
    },
    handleAppCustomClick: () => {
      alert(`custom button alert ${ reactiveVariables.name?.value }`);
    },
    handleChange: (val: any) => {
      console.log('SUMIT LOG', val, reactiveVariables.surname?.value);
    },
    singleNameLengthFn: () => {
      return reactiveVariables.singleNameLength?.value;
    },
    onSubmit: () => {
      currentPage.value = page2;
    },
    onSubmitPage2: () => {
      currentPage.value = page3;
    }
  });
  const reactiveVariableMap = {
    singleName,
    singleNameLength: computed(() => singleName.value.length),
    cities: ref([
      {
        name: 'Mumbai',
      },
      {
        name: 'Bengaluru'
      }
    ])
  };
  const requestSchema = () => {
    console.log('SUMIT LOG', route.fullPath);
    if (route.fullPath.includes('path1'))
      currentPage.value = page;
    else if (route.fullPath.includes('path2'))
      currentPage.value = page2;
    else if (route.fullPath.includes('path3'))
      currentPage.value = page3;
  };
  </script>
  
  <style>
  .my-div {
    border: 1px solid #aaa;
    padding: 10px;
  }
  .native-btn {
    background-color: aliceblue;
    border-style: solid;
    padding: 2px 4px;
    border-radius: 4px;
  }
  .block {
    display: block;
  }
  .random-native-input {
    border-style: solid;
  }
  </style>
  
<template>
    <div>
      <PageCrafter
        :page="page"
        :widgetMap="widgetMap"
        :eventMap="eventMap"
        :reactiveVariableMap="reactiveVariableMap"
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
  
  const singleName = ref('optical fiber');
  const widgetMap = {
    Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
    Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
  };
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
  
  const page: IPage = {
    id: 'sample-page',
    initialData: {
      name: 'Hello',
      surname: 'World'
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
    ]
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
  
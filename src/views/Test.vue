<template>
    <div>
      <PageCrafter
        v-model:page="currentPage"
        :widgets="widgets"
        :events="events"
        :data="data"
        :routing="routing"
      />
      <div>
        Outside page crafter
        <input type="text" class="random-native-input block" v-model="singleName" />
        {{ singleName }}
      </div>
      <div>
        Template test
        <input type="text" class="random-native-input block" v-model="temp" />
        World <span ref="tempRender"></span>
        <button class="native-btn" @click="handleQuantityClick">Increment quantity</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineAsyncComponent, ref, Ref, ComputedRef, computed, watch, createApp, compile } from 'vue';
  import PageCrafter from '../pageCrafter/PageCrafter.vue';
  import { IPage, GenericObject, EventMap, IRouteConfig } from '../pageCrafter/shared/interfaces';
  import { NavigationType } from '../pageCrafter/shared/enums';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();
  
  const singleName = ref('optical fiber');
  const widgets = {
    Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
    Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
  };
  
  const page: IPage = {
    id: 'sample-page',
    data: {
      state: {
        name: 'Hello',
        surname: 'World'
      }
    },
    route: {
        path: '/path1',
        navigationType: NavigationType.Replace
    },
    schema: [
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
          {
            type: 'v-if',
            props: {
              condition: '{{ delayedVariable }}',
              vElseChildren: [
                {
                  type: 'div',
                  children: [
                    'This shows if delayedVariable does not exist {{ delayedVariable }}. Click on "Custom button" above to populate delayedVariable'
                  ]
                }
              ]
            },
            children: [
              {
                type: 'div',
                children: [
                  'This shows if delayedVariable exists {{ delayedVariable }}'
                ]
              }
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
    schema: [
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
    schema: [
      {
        type: 'h1',
        children: [
          'This is page 3'
        ]
      }
    ]
  };
  const currentPage = ref(page);
  const events: EventMap = (state: GenericObject<Ref>, store: GenericObject<Ref>): GenericObject<Function> => ({
    handleAppClick: () => {
      alert('Hello World');
    },
    handleAppCustomClick: () => {
      alert(`custom button alert ${ state.name?.value }`);
      if (state.delayedVariable != null) {
        state.delayedVariable.value = 'delayedValue';
      }
      if (store.delayedVariable != null) {
        store.delayedVariable.value = 'delayedValue';
      }
    },
    handleChange: (val: any) => {
      console.log('SUMIT LOG', val, state.surname?.value);
    },
    singleNameLengthFn: () => {
      return state.singleNameLength?.value;
    },
    onSubmit: () => {
      currentPage.value = page2;
    },
    onSubmitPage2: () => {
      currentPage.value = page3;
    }
  });
  const data = {
    state: {
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
    }
  };
  const routes: Array<IRouteConfig> = [
    {
      path: '/path1',
      schemaFetch: () => {
        return Promise.resolve(page);
      }
    },
    {
      path: '/path2',
      schemaFetch: () => {
        return Promise.resolve(page2);
      }
    },
    {
      path: '/path3',
      schemaFetch: () => {
        return Promise.resolve(page3);
      }
    },
    {
      path: 'error',
      schemaFetch: () => {
        return Promise.resolve({
          id: 'error-page',
          schema: [
            {
              type: 'h1',
              children: [
                'Page not found'
              ]
            }
          ]
        } as IPage);
      }
    }
  ];
  const routing = {
    route,
    router,
    routes
  };

  const temp = ref<string>('');
  const tempRender = ref<any>(null);
  const quantity = ref<number>(10);
  const compiled = compile('Hello {{ singleName }}');
  let currentVueInstance: any = null;
  watch(temp, () => {
    if (currentVueInstance && currentVueInstance.unmount) {
      currentVueInstance.unmount();
    }
    currentVueInstance = createApp({
      render: compile(temp.value),
      setup() {
        return {
          singleName,
          quantity
        }
      }
    })
    currentVueInstance.mount(tempRender.value);
  });
  
  const handleQuantityClick = () => {
    quantity.value = quantity.value + 7;
    console.log('quantity changed');
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
  
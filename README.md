# Vue Page Craft

Vue Page Craft lets you create a UI page through JSON. You will be able to create any native HTML element or custom vue component and provide it's attributes, event bindings and nested children (if any). You may use any popular vue component library or your own component library with this crafter.
This library can be used to create moderately complex pages on the go with some basic level of reactivity support.

### Use case

A user journey is comprised of 2 pages. On the first page user is shown a bunch of service providers, of which user selects 1 and proceeds to page 2. Page 2 needs to show the marketing page of the selected service provider (which may contain banners, benefits, FAQs, even interactive forms and dynamic plans offered by the service provider) each with its own design language or widget set.

##### Approach 1

You can maintain different UI templates for each service provider, and load the one which was selected. One con of this approach will be that; backend can keep integrating new service providers, but frontend will also have to create new templates and deploy it.

##### Approach 2

Have a fixed UI layout and keep changing the images/content. But the con is that ofcourse the layout will have to be fixed or the widgets will have to be extremely customizable.

##### Approach 3 (Vue Page Craft)

You can use Vue Page Craft to power it all through JSON, store it in the database and let backend send back the required page schema based on the selected service provider. Because it is JSON you may also have a default template and tweak it at runtime.

### Demo

https://summitmman.github.io/vue-page-craft/

## Features

- [X] Render any html element
- [X] Render custom vue component
- [X] Props support
- [X] Events support with access to reactive variables
- [X] v-model support (only supported for custom vue components and not native html ones)
- [X] Multiple v-model support
- [X] Dynamic text support
- [X] Dynamic props support
- [X] Named slots
- [X] Initial set of reactive variables from JSON
- [X] v-if
- [X] v-for with access to loop variables
- [X] Nested ref variables in template
- [X] Use any component library
- [X] Routing support
- [X] Persistent store

## Basic usage

1. In Terminal

```bash
npm install vue-page-craft
```

2. In main.ts

```typescript
import PageCrafter from 'vue-page-craft';

app.use(PageCrafter);
```

3. Create page schema which complies to IPage

```typescript
import { IPage } from 'vue-page-craft';
const page: IPage = {
    id: 'sample-page',
    schema: [
        {
            type: 'h1', // Note: you may use native HTML tags here
            children: [
                'Demo page'
            ]
        },
        {
            type: 'div',
            props: {
                class: 'center'
            },
            children: [
                'This is example of a button', // children can be string text or widget object
                {
                    type: 'CustomButton', // This is a custom buttom vue component
                    props: {
                        class: 'block mb-10',
                        variant: 'primary'
                    },
                    events: {
                        click: 'handleAppCustomClick' // This is a function name which should exist in eventMap below
                    },
                    children: [
                        'Custom button to say Hi {{ singleName }}' // reactive variable which should exist in reactiveVariableMap below
                    ]
                }
            ]
        }
    ]
};
```

4. Create a widget map, which is a mapping of string keys to vue components. These keys are used in the page JSON schema. Components can be lazily loaded and mapped. If the components to be used are globally imported then there is no need of adding it to the widgetMap

```typescript
const widgets = {
    CustomButton: defineAsyncComponent(() => import(/* webpackChunkName: "CustomButton" */ './components/CustomButton.vue')),
    Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ './components/Name.vue'))
};
```

5. Create set of reactive variables. Note: the initialData that you pass through the JSON page schema are also added to this set.

```typescript
const singleName = ref('Sumit');
const data: IPageData = {
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
```

6. Create an event map, which is a mapping of string keys to functions. Each of these functions will have access to the set of reactive variables powered by Page Crafter

```typescript
const events: EventMap = (state: GenericObject<Ref | ComputedRef>, store: GenericObject<Ref | ComputedRef>, extra: GenericObject): GenericObject<Function> => ({
    handleAppCustomClick: () => {
        alert(`Hello ${ state.name?.value }`);
    },
    handleChange: (val: any) => {
        console.log('LOG', val, state.surname?.value);
    },
    singleNameLengthFn: () => {
        return state.singleNameLength?.value;
    }
});
```

7. Add to template

```vue
<PageCrafter
    v-model:page="page"
    :widgets="widgets"
    :events="events"
    :data="data"
/>
```

## Other supported features

1. **v-model**
   **NOTE**: v-model will not work with native element like `<input />`. You need to create a wrapper vue component which exposes v-model separately.

```typescript
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
}
```

2. **v-if**

```typescript
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
                'This text shows when both Single Name/Pet Name and First Name are invalid'
            ]
            },
            children: [
            'This text only shows when Single Name/Pet Name is invalid but First Name : "{{ name }}" is valid'
            ]
        }
        ]
    },
    children: [
        'This text only shows when Single Name/Pet Name length : "{{ singleNameLength }}" is a valid',
    ]
}
```

3. **v-for**

```typescript
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
            '{{ name }} has lived in {{loopingIndex}}:{{ loopingItem.name }}'
        ]
        }
    ]
}
```

4. **Named slots**

```typescript
{
    "type": "Name",
    "props": {
        "type": "text",
        "v-model": "{{ name }}",
        "v-model:surname": "{{ surname }}",
        "singleName": "{{ singleName }}"
    },
    "events": {
        "change": "handleChange"
    },
    "slots": {
        "footer": [
            "This footer is a ",
            {
                "type": "b",
                "children": [
                    "named slot example "
                ]
            },
            "showing last name '{{ surname }}' and ",
            {
                "type": "b",
                "children": [
                    "slotProps "
                ]
            },
            "'{{ footerSlotProps.message }}'" // access to slotProps nomenclature "<slot name>SlotProps"
        ]
    }
},
```

5. **Routing**
   Add vue-router to the project and create routes as follows:

   ```typescript
   const routes = {
       path: '/routing',
       component: () => import('../views/Routing.vue'),
       children: [
           {
               path: '',
               name: 'routing',
               component: () => import('../views/RoutingChild.vue'),
           },
           {
               path: '/routing/:pathMatch(.*)',
               component: () => import('../views/RoutingChild.vue'),
           }
       ]
   }
   ```

   All routes must lead to the Page component where we have the PageCrafter.

   Routes handled by the PageCrafter needs to be defined separately so create the array where the PageCrafter is added:

   ```typescript
    const routes: Array<IRouteConfig> = [
       {
           path: new RegExp(/\/routing\/*.*/gm),
           schemaFetch: () => {
               let pageName = route.path.replace('/routing', '').replace('/', '');
               if (!pageName) {
                   pageName = 'page1';
               }
               return getSchemaFor(pageName);
           },
           afterNavigate: (response: any) => {
               jsonData.value = JSON.parse(JSON.stringify(response));
           }
       },
       {
           path: 'error',
           schemaFetch: (err: any) => {
               return Promise.resolve({
                   id: 'error-page',
                   children: [
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

    const routing: IPageRouting = {
        route: useRoute(),
        router: useRouter(),
        routes
    };
   ```

   Pass route, router and the routes to the PageCrafter, as routing will happen through these.

   ```vue
   <PageCrafter
       v-model:page="page"
       :events="events"
       :data="data"
       :routing="routing"
   />
   ```

   In the schema, add a new property "route" to the root

   ```json
   "route": {
           "path": "/routing/page1",
           "navigationType": "replace"
   },
   ```
6. **Store**
   data.state will change for every new schema. If you want to persist reactive state between schemas, you may use data.store. This can be accessed by events.

   ```json
   "data": {
       "state": {
           "name": "Sumit Man"
       },
       "store": {
           "userId": "123123123"
       }
   }
   ```

   Here name will be lost if schema for the page craft changes, but userId and its changes will always be persisted, unless overriden.
   **Note:** In the template, one can access store as "{{ store.name }}"

## Breaking Changes

From version 0.2.x

- initialData in schema is now data: { state: {}, store: {}, extra: {} }
- children at topmost level of the schema is renamed to "schema"
- props are renamed
  - reactiveVariables => data
  - widgetMap => widgets
  - eventMap => events
  - route, router, routes => routing
- need to create routing object
- page is a v-model:page now

## Findings

Ref when passed through an object and not directly returned to the template does not get opened by vue
Hence when vue encounters a variable which is not opened it simply prints the __value which is the value with double quotes
To resolve this we had to create Renderer components which simply return the ref variables inside the object to the template or open it ourselves using the reactive construct

## Next

* [ ] Ability to pass expressions in string as well as in props
* [ ] Provide configuration to prevent route schema from getting cached
* [ ] Have data api calls parallel to the fetchSchema api, so that one is not waiting for the schema to load and then trigger the data api call
* [ ] Shimmer/Loader component

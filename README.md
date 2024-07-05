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

## Basic usage

1. In Terminal

```
npm install vue-page-craft
```

2. In main.ts

```
import PageCrafter from 'vue-page-craft';

app.use(PageCrafter);
```

3. Create page schema which complies to IPage

```
import { IPage } from 'vue-page-craft';
const page: IPage = {
    id: 'sample-page',
    children: [
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

4. Create widgetMap, which is a mapping of string keys to vue components. These keys are used in the page JSON schema. Components can be lazily loaded and mapped. If the components to be used are globally imported then there is no need of adding it to the widgetMap

```
const widgetMap = {
    CustomButton: defineAsyncComponent(() => import(/* webpackChunkName: "CustomButton" */ './components/CustomButton.vue')),
    Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ './components/Name.vue'))
};
```

5. Create set of reactive variables. Note: the initialData that you pass through the JSON page schema are also added to this set.

```
const singleName = ref('Sumit');
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
```

6. Create eventMap, which is a mapping of string keys to functions. Each of these functions will have access to the set of reactive variables powered by Page Crafter

```
const eventMap: EventMap = (reactiveVariables: GenericObject<Ref | ComputedRef>): GenericObject<Function> => ({
    handleAppCustomClick: () => {
        alert(`Hello ${ reactiveVariables.name?.value }`);
    },
    handleChange: (val: any) => {
        console.log('LOG', val, reactiveVariables.surname?.value);
    },
    singleNameLengthFn: () => {
        return reactiveVariables.singleNameLength?.value;
    }
});
```

7. Add to template

```
<PageCrafter
    :page="page"
    :widgetMap="widgetMap"
    :eventMap="eventMap"
    :reactiveVariableMap="reactiveVariableMap"
/>
```

## Other supported features

1. **v-model**
   **NOTE**: v-model will not work with native element like `<input />`. You need to create a wrapper vue component which exposes v-model separately.

```
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

```
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

```
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

```
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

   ```
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

   All routes must lead to the Page component where we have the PageCrafter

   Pass route and router to the PageCrafter, as routing happens through these. Also pass a function which is responsible of fetching new schema, mostly based on the current url, This function is called when we change the url which does not match the current schema so we need to fetch a new schema.

   ```
   <PageCrafter
       v-model:page="page"
       :eventMap="eventMap"
       :reactiveVariableMap="reactiveVariableMap"
       :route="route"
       :router="router"
       @no-schema="requestSchema"
   />
   ```

   In the schema, add a new property "route" to the root

   ```
   "route": {
           "path": "/routing/page1",
           "navigationType": "replace"
   },
   ```

## Findings

Ref when passed through an object and not directly returned to the template does not get opened by vue
Hence when vue encounters a variable which is not opened it simply prints the __value which is the value with double quotes
To resolve this we had to create Renderer components which simply return the ref variables inside the object to the template or open it ourselves using the reactive construct

## Next

* [ ] Types support in events; arguments as well as reactive variable types
* [ ] Ability to pass expressions in string as well as in props
* [ ] Make a better demo

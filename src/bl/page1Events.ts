export const events = ({ getSchemaFor, jsonData, page, store, state }: any) => {
    return {
        routeToPage2: async () => {
            console.log('from page 1 function', store);
            const response = await getSchemaFor('page2');
            jsonData.value = JSON.parse(JSON.stringify(response));
            page.value = response;
        },
        
        changeStateStore: () => {
            if (store.userId) {
                store.userId.value = 9898989898;
            }
            if (state.name) {
                state.name.value = 'Vinita Koyilot';
            }
            console.log('store', store);
        }
    };
};
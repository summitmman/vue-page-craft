export const events = ({
    getSchemaFor,
    jsonData,
    // page,
    store,
    state,
    router
}: any) => {
    return {
        routeToPage2: async () => {
            // Although this piece of code is valid, it bypasses router and hence does not download the business logic script before loading the page
            // as a result the page loads without events binding

            const response = await getSchemaFor('page2');
            jsonData.value = JSON.parse(JSON.stringify(response));
            // page.value = response;
            
            router.push('/routing/page2');
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
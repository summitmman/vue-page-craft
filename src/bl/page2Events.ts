export const events = ({ router }: any) => {
    return {
        routeToPage3: () => {
            router.push('/routing/page3');
        }
    };
};
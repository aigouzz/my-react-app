const shops = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SHOP':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case 'DELETE_SHOP': {
            let filter = state.filter(ele => {
                return ele.id === action.id
            });
            let index = state.indexOf(filter[0]);
            if (index !== -1) {
                state.splice(index, 1);
            }
            let result = [...state];
            return result;
        }
        default:
            return state;
    }
}
export default shops;
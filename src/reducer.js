export const initialState = {
    basket: []
};

const reducer = (state = { basket: []}, action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                basket: [...state.basket, action.item]          // Updated Syntax
            }
        // default:
        //     return state
    }
}

export default reducer;
import BasketItem from "./BasketItem";

export const initialState = {
    basket: []
};

const reducer = (state = { basket: []}, action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                basket: [...state.basket, action.item]          // Updated Syntax
            }
        case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(
                    (BasketItem) => BasketItem.id === action.id
                );
                let newBasket = [...state.basket]

                if(index >= 0){
                    newBasket.splice(index, 1);
                }

                return{
                    ...state.basket,
                    basket: newBasket
                }
        default:
            return state
    }
}

export default reducer;
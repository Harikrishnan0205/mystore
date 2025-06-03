import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    storeProductId: null,
    storeinCart: [],

}

export const itemslice = createSlice({
    initialState,
    name: 'item',
    reducers: {
        // to store productID
        setStoreId: (state, action) => {
            state.storeProductId = action.payload
        },
        // to clear store product
        clearStoreId: (state) => {
            state.storeProductId = null
        },
        // add the item to cart
        setStoreinCart: (state, action) => {
           // state.storeinCart.push(action.payload)
             const selectedItem = action.payload;
            const exists = state.storeinCart.find(item => item.product === selectedItem.product);
            if (!exists) {
                state.storeinCart.push(selectedItem);
            }
        },
        //remove the item from cart
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.storeinCart = state.storeinCart.filter(item => item.product !== id);
        }


    }
})

export const { setStoreId, clearStoreId, setStoreinCart, removeFromCart } = itemslice.actions;
export default itemslice.reducer
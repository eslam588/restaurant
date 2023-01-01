import { createSlice} from "@reduxjs/toolkit";

const initialState={
    itemsInCart:[],
    cartItemsnum:0,
    totalCount:0,
    showbasket:false,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const itemInCartIndex = state.itemsInCart.findIndex((item) => item._id === action.payload._id);
            if(itemInCartIndex >= 0)
            {   
                state.itemsInCart[itemInCartIndex].quantity +=1
                state.cartItemsnum +=1
                state.totalCount += state.itemsInCart[itemInCartIndex].price
                state.showbasket=true
            }
            else {
                let updatedproduct = {...action.payload,quantity:1}
                state.itemsInCart.push(updatedproduct);
                state.cartItemsnum += 1
                state.totalCount+=updatedproduct.price*updatedproduct.quantity
                state.showbasket=true
            }
        },
        incrementCart:(state, action) =>{
            const itemInCartIndex = state.itemsInCart.findIndex((item) => item._id === action.payload._id);
            state.itemsInCart[itemInCartIndex].quantity +=1
            state.cartItemsnum +=1
            state.totalCount += state.itemsInCart[itemInCartIndex].price          
        },
        decrementCart:(state, action) =>{
            const itemInCartIndex = state.itemsInCart.findIndex((item) => item._id === action.payload._id);
            if(state.itemsInCart[itemInCartIndex].quantity > 0){
                state.itemsInCart[itemInCartIndex].quantity -=1
                state.cartItemsnum -=1
                state.totalCount -= state.itemsInCart[itemInCartIndex].price
            }  
        },
        showBasket:(state) => {
            if(state.cartItemsnum > 0){
                state.showbasket=true
            }
            else{
                state.showbasket=false
            }  
        }      
    }
    
})

export const {addToCart,incrementCart,decrementCart,showBasket} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice} from "@reduxjs/toolkit";

let cartStorage = JSON.parse(localStorage.getItem("cart"))

const initialState={
    itemsInCart: cartStorage?.itemsInCart ? cartStorage?.itemsInCart : [],
    cartItemsnum: cartStorage?.cartItemsnum ? cartStorage?.cartItemsnum :0,
    totalCount: cartStorage?.totalCount ? cartStorage?.totalCount : 0,
    showbasket: false,
    showCartPage: false,
    Deliverycharges:"free"
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
                let _id= action.payload._id
                let name =action.payload.name
                let price = action.payload.price
                let updatedproduct = {_id,price,quantity:1}
                state.itemsInCart.push(updatedproduct);
                state.cartItemsnum += 1
                state.totalCount +=updatedproduct.price*updatedproduct.quantity
                state.showbasket=true
            }
            let {itemsInCart,cartItemsnum,totalCount,Deliverycharges} = state
            localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount,Deliverycharges}))
        },
        incrementCart:(state, action) =>{
            const itemInCartIndex = state.itemsInCart.findIndex((item) => item._id === action.payload._id);
            state.itemsInCart[itemInCartIndex].quantity +=1
            state.cartItemsnum +=1
            state.totalCount += state.itemsInCart[itemInCartIndex].price
            let {itemsInCart,cartItemsnum,totalCount,Deliverycharges} = state
            localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount,Deliverycharges}))        
        },
        decrementCart:(state, action) =>{
            const itemInCartIndex = state.itemsInCart.findIndex((item) => item._id === action.payload._id);
            if(state.itemsInCart[itemInCartIndex].quantity >= 1){
                state.itemsInCart[itemInCartIndex].quantity -=1
                state.cartItemsnum -=1
                state.totalCount -= state.itemsInCart[itemInCartIndex].price
                let {itemsInCart,cartItemsnum,totalCount} = state
                localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount}))
                if(state.itemsInCart[itemInCartIndex].quantity < 1){
                    const updatedItemsCart = state.itemsInCart.filter((item) => item._id !== action.payload._id);
                    state.itemsInCart=updatedItemsCart;
                    let {itemsInCart,cartItemsnum,totalCount,Deliverycharges} = state
                    localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount,Deliverycharges}))
                }
            }  
        },
        showBasket:(state) => {
            if(state.cartItemsnum > 0){
                state.showbasket=true
                state.showCartPage=true
            }   
            else{
                state.showbasket=false
                state.showCartPage=false
            }  
        },
        removeCart:(state) => {    
                  state.itemsInCart= []
                  state.cartItemsnum=0
                  state.totalCount=0
                  let {itemsInCart,cartItemsnum,totalCount} = state
                  localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount}))
        }

    }
    
})

export const {addToCart,incrementCart,decrementCart,showBasket,removeCart} = cartSlice.actions;
export default cartSlice.reducer;
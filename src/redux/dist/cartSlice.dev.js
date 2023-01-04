"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.showBasket = exports.decrementCart = exports.incrementCart = exports.addToCart = void 0;

var _toolkit = require("@reduxjs/toolkit");

var cartStorage = JSON.parse(localStorage.getItem("cart"));
var initialState = {
  itemsInCart: cartStorage.itemsInCart ? cartStorage.itemsInCart : [],
  cartItemsnum: cartStorage.cartItemsnum ? cartStorage.cartItemsnum : [],
  totalCount: cartStorage.totalCount ? cartStorage.totalCount : [],
  showbasket: cartStorage.showbasket ? cartStorage.showBasket : false,
  showCartPage: cartStorage.showCartPage ? cartStorage.showCartPage : false
};
var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: function addToCart(state, action) {
      var itemInCartIndex = state.itemsInCart.findIndex(function (item) {
        return item._id === action.payload._id;
      });

      if (itemInCartIndex >= 0) {
        state.itemsInCart[itemInCartIndex].quantity += 1;
        state.cartItemsnum += 1;
        state.totalCount += state.itemsInCart[itemInCartIndex].price;
        state.showbasket = true;
      } else {
        var _id = action.payload._id;
        var name = action.payload.name;
        var price = action.payload.price;
        var updatedproduct = {
          _id: _id,
          name: name,
          price: price,
          quantity: 1
        };
        state.itemsInCart.push(updatedproduct);
        state.cartItemsnum += 1;
        state.totalCount += updatedproduct.price * updatedproduct.quantity;
        state.showbasket = true;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementCart: function incrementCart(state, action) {
      var itemInCartIndex = state.itemsInCart.findIndex(function (item) {
        return item._id === action.payload._id;
      });
      state.itemsInCart[itemInCartIndex].quantity += 1;
      state.cartItemsnum += 1;
      state.totalCount += state.itemsInCart[itemInCartIndex].price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementCart: function decrementCart(state, action) {
      var itemInCartIndex = state.itemsInCart.findIndex(function (item) {
        return item._id === action.payload._id;
      });

      if (state.itemsInCart[itemInCartIndex].quantity >= 1) {
        state.itemsInCart[itemInCartIndex].quantity -= 1;
        state.cartItemsnum -= 1;
        state.totalCount -= state.itemsInCart[itemInCartIndex].price;
        localStorage.setItem("cart", JSON.stringify(state));

        if (state.itemsInCart[itemInCartIndex].quantity < 1) {
          var updatedItemsCart = state.itemsInCart.filter(function (item) {
            return item._id !== action.payload._id;
          });
          state.itemsInCart = updatedItemsCart;
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    },
    showBasket: function showBasket(state) {
      if (state.cartItemsnum > 0) {
        state.showbasket = true;
        state.showCartPage = true;
      } else {
        state.showbasket = false;
        state.showCartPage = false;
      }
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
    addToCart = _cartSlice$actions.addToCart,
    incrementCart = _cartSlice$actions.incrementCart,
    decrementCart = _cartSlice$actions.decrementCart,
    showBasket = _cartSlice$actions.showBasket;
exports.showBasket = showBasket;
exports.decrementCart = decrementCart;
exports.incrementCart = incrementCart;
exports.addToCart = addToCart;
var _default = cartSlice.reducer;
exports["default"] = _default;
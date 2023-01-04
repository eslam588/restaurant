"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getCategoriesIds = exports.filterbyName = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _product = _interopRequireDefault(require("../product.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var prods = JSON.parse(JSON.stringify(_product["default"]));
var initialState = {
  prods: prods,
  filteredproductbyname: [],
  showmostselling: true,
  categories_ids: []
};
var productSlice = (0, _toolkit.createSlice)({
  name: "product",
  initialState: initialState,
  reducers: {
    filterbyName: function filterbyName(state, action) {
      var newstate = JSON.parse(JSON.stringify(state.prods));
      var filterProducten = newstate.filter(function (prod) {
        return prod.name[0]["en"].toLowerCase().includes(action.payload.toLowerCase());
      });
      state.filteredproductbyname = filterProducten;

      if (state.filteredproductbyname.length === newstate.length) {
        state.filteredproductbyname = [];
      } else {
        state.filteredproductbyname = filterProducten;
      }

      if (action.payload.length > 0) {
        state.showmostselling = false;
      } else {
        state.showmostselling = true;
      }
    },
    getCategoriesIds: function getCategoriesIds(state, action) {
      var newstate = JSON.parse(JSON.stringify(state.prods));
      var categories = newstate.map(function (prod) {
        return prod.category;
      });
      var categories_ids = categories.map(function (cat) {
        return cat[0]["_id"];
      });

      var uniq = _toConsumableArray(new Set(categories_ids));

      state.categories_ids = uniq;
    }
  }
});
var _productSlice$actions = productSlice.actions,
    filterbyName = _productSlice$actions.filterbyName,
    getCategoriesIds = _productSlice$actions.getCategoriesIds;
exports.getCategoriesIds = getCategoriesIds;
exports.filterbyName = filterbyName;
var _default = productSlice.reducer;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  num: 0,
  lang: "en"
};
var langSlice = (0, _toolkit.createSlice)({
  name: "lang",
  initialState: initialState,
  reducers: {// changelangs:(state,action)=>{
    //     if(i18n.language == 'en'){
    //         state.num=0
    //         state.lang="en"
    //       }
    //       else{
    //         state.num=1
    //         state.lang="ar"
    //       }
    // }
  }
});
var _default = langSlice.reducer;
exports["default"] = _default;
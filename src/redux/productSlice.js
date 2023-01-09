import { createSlice} from "@reduxjs/toolkit";
import product from "../product.json"
import categories from "../Categories.json"


let prods = JSON.parse(JSON.stringify(product))
let  Categories = JSON.parse(JSON.stringify(categories))

const initialState={
    prods,
    Categories,
    filteredproductbyname:[],
    filteredProducts:[],
    showmostselling:true,
    lang:"en"
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        filterbyName:(state, action) => {
           let newstate = JSON.parse(JSON.stringify(state.prods))
           const filterProducten =  newstate.filter(prod => prod.name[state.lang].toLowerCase().includes(action.payload.toLowerCase()))
           state.filteredproductbyname=filterProducten
           if(state.filteredproductbyname.length === newstate.length ){
            state.filteredproductbyname=[]
           }
           else{
            state.filteredproductbyname=filterProducten
           }
           if(action.payload.length > 0){
            state.showmostselling=false
           }
           else{
            state.showmostselling=true
           } 
        },
        detectionLang:(state,action)=>{
              state.lang=action.payload
        }
    }
    
})

export const {filterbyName,detectionLang} = productSlice.actions;
export default productSlice.reducer;

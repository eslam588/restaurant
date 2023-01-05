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
    categories_ids:[]
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        filterbyName:(state, action) => {
           let newstate = JSON.parse(JSON.stringify(state.prods))
           const filterProducten =  newstate.filter(prod => prod.name[0]["en"].toLowerCase().includes(action.payload.toLowerCase()))
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
        getCategories:(state, action)=>{
            state.filteredProducts = state.prods.filter(pro => pro.category_id === action.payload)            
        }
    }
    
})

export const {filterbyName,getCategories} = productSlice.actions;
export default productSlice.reducer;




// let newstate = JSON.parse(JSON.stringify(state.prods))
// let categories = newstate.map((prod) => prod.category)
// let categories_ids = categories.map((cat) => cat[0]["_id"])
// let uniq = [...new Set(categories_ids)];
// state.categories_ids=uniq
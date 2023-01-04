import { createSlice} from "@reduxjs/toolkit";
import product from "../product.json"


let prods = JSON.parse(JSON.stringify(product))

const initialState={
    prods,
    filteredproductbyname:[],
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
        getCategoriesIds:(state, action)=>{
            let newstate = JSON.parse(JSON.stringify(state.prods))
            let categories = newstate.map((prod) => prod.category)
            let categories_ids = categories.map((cat) => cat[0]["_id"])
            let uniq = [...new Set(categories_ids)];
            state.categories_ids=uniq
        }
    }
    
})

export const {filterbyName,getCategoriesIds} = productSlice.actions;
export default productSlice.reducer;
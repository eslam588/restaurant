import { createSlice} from "@reduxjs/toolkit";



const initialState={
    language:"ar",
    hiddencart:false,
    hiddenlocation:false
}

const langSlice = createSlice({
    name:"lang",
    initialState,
    reducers:{
        detectionlang: (state, action) => {
            console.log(action.payload);
            state.language=action.payload
       },
       hiddenCart:(state, action) => {
            if(action.payload){
                state.hiddencart=false
            }
            else{
                state.hiddencart=true
            }
           
       },
       hiddenLocation:(state, action) => {
            if(action.payload){
                state.hiddenlocation=false
            }
            else{
                state.hiddenlocation=true
            } 
       },


    }
})

export const {detectionlang,hiddenCart,hiddenLocation} = langSlice.actions;
export default langSlice.reducer;
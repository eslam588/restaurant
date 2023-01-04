import { createSlice} from "@reduxjs/toolkit";




const initialState={
    num:0,
    lang:"en"
}

const langSlice = createSlice({
    name:"lang",
    initialState,
    reducers:{
        // changelangs:(state,action)=>{
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
    
})

export default langSlice.reducer;
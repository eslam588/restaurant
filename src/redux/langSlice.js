import { createSlice} from "@reduxjs/toolkit";



const initialState={
    language:"en"
}

const langSlice = createSlice({
    name:"lang",
    initialState,
    reducers:{
        detectionlang: (state, action) => {
            console.log(action.payload);
            state.language=action.payload
       }
    }
})

export const {detectionlang} = langSlice.actions;
export default langSlice.reducer;
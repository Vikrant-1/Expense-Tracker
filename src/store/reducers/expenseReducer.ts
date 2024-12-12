import { createSlice } from "@reduxjs/toolkit";


interface ExpenseStateProps{

};

const initialState:ExpenseStateProps = {

};

const expenseSlice = createSlice({
    name:'expense',
    initialState: initialState,
    reducers: {},
    extraReducers(builder){},
});


export default expenseSlice.reducer;
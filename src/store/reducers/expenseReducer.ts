import { createSlice } from "@reduxjs/toolkit";


interface ExpenseStateProps{
    expenses: [];
};

const initialState: ExpenseStateProps = {
    expenses:[],
};

const expenseSlice = createSlice({
    name:'expense',
    initialState: initialState,
    reducers: {},
    extraReducers(builder){},
});


export default expenseSlice.reducer;
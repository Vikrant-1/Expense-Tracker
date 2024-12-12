import { createSlice } from "@reduxjs/toolkit";


interface GroupStateProps {
    groups: [],
}


const initialState: GroupStateProps = {
    groups:[],
};

const groupSlice = createSlice({
    name:'group',
    initialState: initialState,
    reducers: {},
    extraReducers(builder){},
});


export default groupSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState:{
        resInfo:{}
    },
    reducers:{
        setRestaurantInfo: (state, action) => {
            state.resInfo = action.payload;
        },
    }
})

export const { setRestaurantInfo } = restaurantSlice.actions;

export default restaurantSlice.reducer;
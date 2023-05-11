import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null
  },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
//   reducer actually an actions that allow us to modify global state
  reducers: {
    setRestaurant : (state, action) => {
        state.restaurant = action.payload;
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant,  } = restaurantSlice.actions


/*
Now creating a selector that allows us to access global store.
pull yhr item from the basket state
*/
export const selectBasketItems = (state) => state.basket.items;

export const selectRestaurant = (state) => state.restaurant.restaurant;
export default restaurantSlice.reducer
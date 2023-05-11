import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import restaurantReducer from './features/restaurantSlice';
export const store = configureStore({
    /*
        so what i done here,
        i combine basketSlice with the global store
    */
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
})
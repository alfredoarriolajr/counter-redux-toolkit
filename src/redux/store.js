import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import ageReducer from './ageSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ageNumber: ageReducer,
  },
})
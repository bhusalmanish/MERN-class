import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reduxToolkit/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
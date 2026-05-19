import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './assets/redux/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})

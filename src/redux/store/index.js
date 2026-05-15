import { configureStore } from "@reduxjs/toolkit"
import { mainReducer } from "../reduces"

export const store = configureStore({
  reducer: mainReducer,
})

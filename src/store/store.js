import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice'

export const store = configureStore({
  reducer: {
    user: usersSlice /* store name user */
  },
})
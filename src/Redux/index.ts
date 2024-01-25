import { configureStore } from '@reduxjs/toolkit'
import { hojreApi } from './hojre'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductSlice } from './ProductsSlice'
import { authSlice } from './authSlice'


export const store = configureStore({
    reducer: {
        products: ProductSlice.reducer,
        auth:authSlice.reducer,
      [hojreApi.reducerPath]: hojreApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(hojreApi.middleware),
  })

  setupListeners(store.dispatch)
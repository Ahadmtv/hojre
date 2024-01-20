import { configureStore } from '@reduxjs/toolkit'
import { hojreApi } from './hojre'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductSlice } from './ProductsSlice'


export const store = configureStore({
    reducer: {
        products: ProductSlice.reducer,
      [hojreApi.reducerPath]: hojreApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(hojreApi.middleware),
  })

  setupListeners(store.dispatch)
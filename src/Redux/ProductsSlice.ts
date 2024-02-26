import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Iproduct } from "../components/shop-sec/CategoryAll";

export interface Istate {
    filterdPro: Iproduct[];
    currentPage: number;
    productPerPage: number;
}
const initialState: Istate = {
    filterdPro: [],
    currentPage: 1,
    productPerPage: 12
}

// اسلایس برای صفحه بندی مناسب محصولات
export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setFilterdPro: (state, action: PayloadAction<Iproduct[]>) => {
            state.filterdPro = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
    }
})
export const { setFilterdPro,setCurrentPage } = ProductSlice.actions
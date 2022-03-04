import { createAsyncThunk, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { mapkeys } from "lib";
import APICall from "lib/apiCall";

export interface IProductDetails {
    price: string;
    title: string;
    city: string;
    time: string ;
    photos: string[];
    status: string;
    description: string;
    id: number;
}

export type IProductsSliceState = {
    [productId: string]: IProductDetails
} | null


export const fetchProducts = createAsyncThunk(
    'news/newsSocialMedias',
    async function() {
        const { data: products } = await APICall<IProductDetails[]>({
            url: '/products',
            method: 'GET',
        });

        return products;
    }
)

const initialState = null;

const productsSlice = createReducer<IProductsSliceState>(
    initialState,
    (builder) => {
        builder
            .addCase( fetchProducts.fulfilled, ( state, action: PayloadAction<IProductDetails[]> )=> {
                return mapkeys(action.payload, 'id');
            })
    }
);

export default productsSlice;
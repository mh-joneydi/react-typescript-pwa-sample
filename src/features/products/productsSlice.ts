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
    all: { [productId: string]: IProductDetails } | null
    details: { [productId: string]: IProductDetails }
}


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function() {
        const { data: products } = await APICall<IProductDetails[]>({
            url: '/products',
            method: 'GET',
        });

        return products;
    }
)

export const fetchProductsDetails = createAsyncThunk(
    'products/fetchProductsDetails',
    async function(productId: string) {
        const { data: productInfo } = await APICall<IProductDetails>({
            url: `/products/${productId}`,
            method: 'GET',
        });

        return productInfo;
    }
)

const initialState: IProductsSliceState = {
    all: null,
    details: {}
};

const productsSlice = createReducer<IProductsSliceState>(
    initialState,
    (builder) => {
        builder
            .addCase( fetchProducts.fulfilled, ( state, action: PayloadAction<IProductDetails[]> )=> {
                state.all =  mapkeys(action.payload, 'id');
            })
            .addCase( fetchProductsDetails.fulfilled, (state, action: PayloadAction<IProductDetails> )=> {
                state.details[action.payload.id] = action.payload;
            })
    }
);

export default productsSlice;
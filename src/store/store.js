import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/conuterSlice'
import productReducer from './features/products/productSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
    },
});

export default store;
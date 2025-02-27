import {configureStore} from '@reduxjs/toolkit';

import userSlice from '../redux/slices/userSlice';
import productSlice from '../redux/slices/productSlice';
import cartSlice from '../redux/slices/cartSlice';
import orderSlice from '../redux/slices/orderSlice';


export default configureStore({reducer: 
    {
    user: userSlice, 
    products: productSlice,
    cart: cartSlice,
    orders: orderSlice
    }
});
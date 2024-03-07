import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../featuresReducer/todo/todoSlice';

const store = configureStore({
    reducer: todoReducer
});

export default store;

// export const store = configureStore({
//     reducer: todoReducer
// });
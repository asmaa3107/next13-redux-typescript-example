import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../store/slices/userSlice";

export function makeStore ()  {
    return configureStore({
        devTools:true,
        reducer:{
            user: userReducer,
        }
    });
}
 
export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
        // add your reducers here
        //Example:
        // auth: authReducer


    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
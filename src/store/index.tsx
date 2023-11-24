import { configureStore } from "@reduxjs/toolkit"
import formReducer from "./form-slice.tsx"
import userSlice from "./user-slice.tsx"

export const store = configureStore({
    reducer: {
        form: formReducer,
        user: userSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

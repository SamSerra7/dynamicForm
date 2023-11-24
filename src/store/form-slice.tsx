import { createSlice } from "@reduxjs/toolkit"
import FormType from "../types/FormTypes"

export const formSlice = createSlice({
    name: "form",
    initialState: {
        form: Array<FormType[] | FormType>,
    },
    reducers: {
        setForm: (state, action) => {
            state.form = action.payload
        },
    },
})

export const { setForm } = formSlice.actions
export default formSlice.reducer

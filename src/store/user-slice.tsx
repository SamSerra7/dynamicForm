import { createSlice } from "@reduxjs/toolkit"
import { User } from "../types/User"

export const userSlice = createSlice({
    name: "data",
    initialState: {
        data: {} as User,
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer

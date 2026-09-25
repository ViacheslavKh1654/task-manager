import {createSlice} from "@reduxjs/toolkit";
import type {User} from "@/shared/types/user";

export type AuthState = {
    user: User | null;
    status: 'idle' | 'loading' | 'authenticated' | 'unauthenticated';
}

export const initialState: AuthState = {
    user: null,
    status: 'idle',
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: (create) => ({
        loading: create.reducer((state) => {
            state.status = "loading";
}),
        login: create.reducer<User>((state, action) => {
            state.user = action.payload;
            state.status = "authenticated";
        })
})
})

export const { login, loading } = authSlice.actions;
export const authReducer = authSlice.reducer;
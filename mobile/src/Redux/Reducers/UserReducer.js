import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false
}

export const UserReducer = createReducer(initialState, {
    userLoginRequest: state => {
        state.loading = true,
            state.isAuthenticated = false
    },
    userLoadRequest: state => {
        state.loading = true,
            state.isAuthenticated = false
    },
    userLoginSuccess: (state = { user: {} }, action) => {
        state.loading = false,
            state.isAuthenticated = true,
            state.user = action.payload
    },
    userLoadSuccess: (state = { user: {} }, action) => {
        state.loading = false,
            state.user = action.payload,
            state.isAuthenticated = true
    },
    userLogoutSuccess: (state = { user: {} }) => {
        state.loading = false,
            state.user = null,
            state.isAuthenticated = false
    },
    userLoginFail: (state = { user: {} }, action) => {
        state.loading = false,
            state.isAuthenticated = false,
            state.user = null,
            state.error = action.payload
    },
    userLoadFailed: (state = { user: {} }, action) => {
        state.loading = false,
            state.isAuthenticated = false,
            state.user = null,
            state.error = action.payload
    },
    userLogOutFail: (state, action) => {
        state.loading = false,
            state.error = action.payload
    }

})
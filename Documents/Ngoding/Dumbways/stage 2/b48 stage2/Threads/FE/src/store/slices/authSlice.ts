import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interface/user';
import { setAuthToken } from "../../lib/api";

const initialAuthState: IUser = {
    id: 0,
    username: "",
    password: "",
    fullname: "",
    picture: "",
    description: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (state, action) => {
            const id = action.payload.id
            const email = action.payload.email
            const username = action.payload.username
            const fullname = action.payload.fullname
            const token = action.payload.token
            const picture = action.payload.picture
            const description = action.payload.description

            setAuthToken(token)
            localStorage.setItem("token", token)

            state.id = id
            state.email = email
            state.username = username
            state.fullname = fullname
            state.picture = picture
            state.description = description
        },

        AUTH_CHECK: (state, action) => {

            const {
                id,
                email,
                username,
                fullname,
                picture,
                description,
            } = action.payload.user     

            state.id = id
            state.email = email
            state.username = username
            state.fullname = fullname
            state.picture = picture
            state.description = description
        },

        AUTH_ERROR: () => {
            localStorage.removeItem("token");
        },

        AUTH_LOGOUT: () => {
            localStorage.removeItem("token");
        }        
    }
})
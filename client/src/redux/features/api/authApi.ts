import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {AuthState, LoginData, RegisterData} from "../../../types/Auth/auth";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    endpoints: (build) => ({
        userRegister: build.mutation({
            query: (body: RegisterData) => ({
                url: 'auth/register',
                method: "POST",
                body
            })
        }),
        userLogin: build.mutation({
            query: (body: LoginData) => ({
                url: 'auth/login',
                method: "POST",
                body
            })
        })
    })
})

export const {useUserRegisterMutation, useUserLoginMutation} = authApi
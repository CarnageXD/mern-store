import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {RegisterData, LoginData, AuthState} from "../../../types/Auth/auth";
import {IProduct} from "../../../types/Products/products";
import {ICartProduct, ICartResponse} from "../../../types/Cart/cart";

export const mainApi = createApi({
    reducerPath: 'mainApi',
    tagTypes: ['Cart'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    endpoints: (build) => ({
        //AUTH
        userRegister: build.mutation<void, RegisterData>({
            query: (body) => ({
                url: 'auth/register',
                method: "POST",
                body
            })
        }),
        userLogin: build.mutation<AuthState, LoginData>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body
            })
        }),
        getCart: build.query<ICartResponse, string | null>({
            query: (id) => `cart/${id}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.products.map(({ id }) => ({ type: 'Cart' as const, id })),
                        { type: 'Cart', id: 'LIST' },
                    ]
                    : [{ type: 'Cart', id: 'LIST' }],
        }),
        addCartProduct: build.mutation({
            query: (payload) => ({
                url: `cart/add/${payload.userId}`,
                method: 'POST',
                body: {product: payload.id}
            }),
            invalidatesTags: [{type: 'Cart', id: 'LIST'}]
        }),
        deleteCartProduct: build.mutation({
            query: (payload) => ({
                url: `cart/delete/${payload.userId}`,
                method: 'DELETE',
                body: {product: payload.id}
            }),
            invalidatesTags: [{type: 'Cart', id: 'LIST'}]
        }),
        //PRODUCTS
        getProducts: build.query<IProduct[], void>({
            query: () => '/products'
        }),
        getProduct: build.query<IProduct, string | void>({
            query: (id) => `/products/${id}`
        }),
        addProduct: build.mutation({
            query: (body:string) => ({
                url: 'products/create',
                method: "POST",
                body
            })
        }),
    })
})

export const {
    useUserRegisterMutation,
    useUserLoginMutation,
    useGetProductsQuery,
    useGetProductQuery,
    useGetCartQuery,
    useAddCartProductMutation,
    useDeleteCartProductMutation,
} = mainApi
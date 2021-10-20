import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {AuthState, LoginData, RegisterData} from "../../../types/Auth/auth";
import {IProduct, IProductsResponse, IQueryGetProduct} from "../../../types/Products/products";
import {ICartResponse} from "../../../types/Cart/cart";
import {IOrders} from "../../../types/Orders/orders";
import {RootState} from "../../store";
import {API_URL} from "../../../config";

export const mainApi = createApi({
    reducerPath: 'mainApi',
    tagTypes: ['Cart', 'Orders', 'Products'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}api/` || 'http://localhost:5000/api',
        prepareHeaders(headers, {getState}) {
            const token = (getState() as RootState).auth.token
            headers.set('Authorization', `Bearer ${token}`)
            return headers
        }
    }),
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
        //CART
        getCart: build.query<ICartResponse, string | null>({
            query: () => `cart`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.products.map(({_id}) => ({type: 'Cart' as const, _id})),
                        {type: 'Cart', id: 'LIST'},
                    ]
                    : [{type: 'Cart', id: 'LIST'}],
        }),
        addCartProduct: build.mutation({
            query: (payload) => ({
                url: `cart/add/`,
                method: 'POST',
                body: {product: payload.id, size: payload.size}
            }),
            invalidatesTags: [{type: 'Cart', id: 'LIST'}]
        }),
        deleteCartProduct: build.mutation({
            query: (payload) => ({
                url: `cart/delete/`,
                method: 'DELETE',
                body: {product: payload.id}
            }),
            invalidatesTags: [{type: 'Cart', id: 'LIST'}]
        }),
        adjustProductCartQuantity: build.mutation({
            query: (payload) => ({
                url: `cart/update/`,
                method: 'PUT',
                body: {product: payload.product, quantity: payload.cartQuantity}
            }),
            invalidatesTags: [{type: 'Cart', id: 'LIST'}]
        }),
        //PRODUCTS
        getProducts: build.query<IProductsResponse, IQueryGetProduct>({
            query: (queryParams) =>
                `/products?limit=${queryParams.limit}&page=${queryParams.page}&order=${queryParams.order}&min=${queryParams.filters?.min}&max=${queryParams.filters?.max}&category=${queryParams.filters?.category}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.items.map(({_id}) => ({type: 'Products' as const, _id})),
                        {type: 'Products', id: 'LIST'},
                    ]
                    : [{type: 'Products', id: 'LIST'}],
        }),

        getProduct: build.query<IProduct, string | void>({
            query: (id) => `/products/${id}`
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: 'products/create',
                method: "POST",
                body
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        }),
        //ORDERS
        getOrders: build.query<IOrders[], string | null>({
            query: () => `orders/`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({_id}) => ({type: 'Orders' as const, _id})),
                        {type: 'Orders', id: 'LIST'},
                    ]
                    : [{type: 'Orders', id: 'LIST'}],
        }),
        addOrder: build.mutation({
            query: (cartId) => ({
                url: `orders/create/`,
                method: 'POST',
                body: {cartId}
            }),
            invalidatesTags: [{type: 'Orders', id: 'LIST'}, {type: 'Cart', id: 'LIST'}]
        })
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
    useGetOrdersQuery,
    useAddOrderMutation,
    useAddProductMutation,
    useAdjustProductCartQuantityMutation,
} = mainApi
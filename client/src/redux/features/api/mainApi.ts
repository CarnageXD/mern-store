import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {AuthState, LoginData, RegisterData} from "../../../types/Auth/auth";
import {IProduct, IProductsResponse} from "../../../types/Products/products";
import {ICartResponse} from "../../../types/Cart/cart";
import {IOrders} from "../../../types/Orders/orders";

export const mainApi = createApi({
    reducerPath: 'mainApi',
    tagTypes: ['Cart', 'Orders'],
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
        //CART
        getCart: build.query<ICartResponse, string | null>({
            query: (id) => `cart/${id}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.products.map(({_id}) => ({type: 'Cart' as const, _id})),
                        {type: 'Cart', id: 'LIST'},
                    ]
                    : [{ type: 'Cart', id: 'LIST' }],
        }),
        addCartProduct: build.mutation({
            query: (payload) => ({
                url: `cart/add/${payload.userId}`,
                method: 'POST',
                body: {product: payload.id, size: payload.size}
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
        adjustProductCartQuantity: build.mutation({
            query: (payload) => ({
                url: `cart/update/${payload.userId}`,
                method: 'PUT',
                body: {product: payload.product, quantity: payload.cartQuantity}
            }),
            invalidatesTags: [{type: 'Cart', id: 'LIST'}]
        }),
        //PRODUCTS
        getProducts: build.query<IProductsResponse, { limit: number, page: number }>({
            query: (queryParams) => `/products?limit=${queryParams.limit}&page=${queryParams.page}`
        }),
        getProduct: build.query<IProduct, string | void>({
            query: (id) => `/products/${id}`
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: 'products/create',
                method: "POST",
                body
            })
        }),
        //ORDERS
        getOrders: build.query<IOrders[], string | null>({
            query: (id) => `orders/${id}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ _id }) => ({ type: 'Orders' as const, _id })),
                        { type: 'Orders', id: 'LIST' },
                    ]
                    : [{ type: 'Orders', id: 'LIST' }],
        }),
        addOrder: build.mutation({
            query: (payload) => ({
                url: `orders/create/${payload.userId}`,
                method: 'POST',
                body: {cardId: payload.cartId}
            }),
            invalidatesTags: [{type: 'Cart', id: 'LIST'}]
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
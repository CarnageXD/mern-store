import {IProduct} from "../Products/products";

export interface CartState {
    products: ICartProduct[],
    cartId: string | null,
}

export interface ICartProduct {
    _id: string
    product: IProduct,
    quantity: number,
    total: number,
    size: string,
}

export interface ICartResponse {
    userId: string,
    id: string,
    products: ICartProduct[]
}

export interface ICartSummary {
    totalQuantity: number,
    totalPrice: number,
    handleAddProduct: () => void
}
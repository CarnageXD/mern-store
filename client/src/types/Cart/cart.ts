import {IProduct} from "../Products/products";

export interface CartState {
    products: ICartProduct[]
}

export interface ICartProduct {
    _id: string
    product: IProduct,
    quantity: number,
    total: number,
    size: string,
}

export interface  ICartResponse {
    userId: string,
    id: string,
    products: ICartProduct[]
}
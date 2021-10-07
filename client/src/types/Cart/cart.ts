import {IProduct} from "../Products/products";

export interface ICartProduct {
    id: string
    product: IProduct,
    quantity: number,
    total: number,
}
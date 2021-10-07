import {IProduct} from "../Products/products";

export interface IOrders {
    _id: string
    products: IOrderItem[],
    orderTime: string,
}

export interface IOrderItem {
    id: string,
    product: IProduct,
    quantity: number,
    total: number,
}
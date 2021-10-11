import {IProduct} from "../Products/products";

export interface OrdersResponse {
    _id: string,
    orders: IOrders[],
    userId: string,
}

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
import {IProduct} from "../Products/products";

export interface OrdersState {
    orders: IOrders[],
    grandTotalPrice: number,
    grandTotalQuantity: number,
    avgSpent: number,
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

export interface IOrderSummary {
    price: number,
    avg: number,
    quantity: number
}
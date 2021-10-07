import {ICartProduct} from "../Cart/cart";

export interface IOrders {
    id: string
    orders: ICartProduct,
    orderTime: string,
}
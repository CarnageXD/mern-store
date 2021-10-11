import { IOrders } from '../types/Orders/orders'
import {} from './..'

export const getTotalOrders = (orders: IOrders[]) => {
    const totalPrice = orders
    .map((order) => order.products.map((product) => product.total))
    .flat()
    .reduce((prev, cur) => prev + cur, 0);
    const totalOrdersQuantity = orders.length
    const avgSpentOnOrder = totalPrice / totalOrdersQuantity

    return {price: totalPrice, quantity: totalOrdersQuantity, avg: avgSpentOnOrder}
}
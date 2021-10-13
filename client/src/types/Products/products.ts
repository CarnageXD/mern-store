export interface IProduct {
    _id: number
    title: string
    category: string
    description: string
    image: string
    price: number
    sex: number,
    sizes: string
}

export interface IProductsResponse {
    items: IProduct[],
    totalItems: number,
}

export interface IDetailedProduct {
    id: string
}


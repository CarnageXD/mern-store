export interface IProduct {
    _id: string
    title: string
    category: string
    description: string
    image: string
    price: number
    sex: number,
    sizes: string
}

export interface IQueryGetProduct {
    limit?: number,
    page?: number,
    order?: string
}

export interface IProductsResponse {
    items: IProduct[],
    totalItems: number,
}

export interface IDetailedProduct {
    id: string
}


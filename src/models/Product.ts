export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductsResponse {
    data: Product[];
    currentPage: number;
    totalPages: number;

}
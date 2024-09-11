

export type Product = {
    id: string,
    name: string,
    description: string,
    category: string,
    image: string,
    price: number,
    quantity: number
}

export type CarouselCardType = {
    type: string,
    icon: React.ReactNode,
    description: string,
    filter: (data: Product[]) => Product[]
}
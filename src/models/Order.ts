import { CartItem } from "./Cart"

export type Order = {
    id: string,
    cartItems: CartItem[]
    subTotal: number,
    tax: number,
    shippingTotal: number,
    shippingCity: string,
    shippingCountry: string,
    shippingLine1: string,
    shippingLine2?: string,
    shippingPostalCode: string,
    shippingState: string,
    customerName: string,
    customerEmail: string,
    grandTotal: number,
    createdAt: number,
    status: "Unpaid" | "Paid" | "Refunded" | "Comfirmed" | "Shipped"
}

export type OrderV2 = {
    id: string,
    cartItems: CartItem[]
    subTotal: number,
    tax: number,
    shippingTotal: number,
    shipping_city: string,
    shipping_country: string,
    shipping_line1: string,
    shipping_line2?: string,
    shipping_postal_code: string,
    shipping_state: string,
    customer_name: string,
    customer_email: string
    finalTotal: number,
    createdAt: number,
    status: "Unpaid" | "Paid" | "Refunded" | "Comfirmed" | "Shipped"
}
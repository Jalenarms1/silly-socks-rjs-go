import React, { useEffect, useState } from 'react'
import logo from ".././assets/sockslogo.png"
import { useParams, useSearchParams } from 'react-router-dom'
import { httpsCallable } from 'firebase/functions';
import {functions} from "../../firebase-config"
import { Order } from '../models/Order';
import { LuTrash2 } from 'react-icons/lu';
import TabBar from '../TabBar';
import { useCartContext } from '../context/useCartContext';
import OrderCartItem from './OrderCartItem';

const OrderView = () => {
    const {orderId} = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const [order, setOrder] = useState<Order | null>(null)
    const {clearCart, cartItems} = useCartContext()

    const getOrder = async (orderId: string) => {

        const resp = await fetch(import.meta.env.VITE_API_DOMAIN + "/order/" + orderId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data: Order = await resp.json() 

        console.log(data);

        setOrder(data)
        
    }

    const getSubTotal = (order: Order): number => {
        return order.cartItems.reduce((acc, ci) => acc += ci.subTotal, 0)
    }

    const getTax = (order: Order): number => {
        return (parseFloat(((getSubTotal(order) / 100) * 1.08).toFixed(2))) * 100 - getSubTotal(order)
    }

    const getTotalWTax = (order: Order): number => {
        return getTax(order) + getSubTotal(order) + 500
    }

    useEffect(() => {
        console.log(orderId);

        if (orderId) {
            getOrder(orderId)
        }
        
    }, [orderId])

    useEffect(() => {
        if (searchParams && searchParams.get("resetCart") && searchParams.get("resetCart") == "true") {
            
            if (cartItems.length > 0) clearCart()
            
        }
    }, [searchParams])

    const secondsToDateTime = (timestamp: number) => {
        const date = new Date(timestamp * 1000)

        let hour = date.getHours()
        const min = date.getMinutes().toString().padEnd(2, "0")

        hour = hour % 12 || 12

        const dateStr = date.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
        })

        return `${hour.toString().padStart(2, "0")}:${min} ${dateStr}`
    }

  return (
    <div className="min-h-screen bg-white relative w-full scrollbar-hide flex flex-col font-mono p-2">
        <div className="flex flex-col gap-2 px-3 overflow-y-scroll min-h-[100vh] pb-40">
            <img src={logo} alt="socks logo" className='w-10 h-10' />
            <div className="w-full flex justify-between items-center border-b border-zinc-100">
                <p className='text-3xl'>Order</p>
            </div>
           {order &&  <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <p className='text-xs text-zinc-400'>Order Id</p>
                    <p>{order.id.split("-").at(-1)}</p>
                </div>

                <div className="flex flex-col">
                    <p className='text-xs text-zinc-400'>Status</p>
                    <p className='text-green-500'>{order.status}</p>
                </div>

                <div className="flex flex-col">
                    <p className='text-xs text-zinc-400'>Placed at</p>
                    <p className=''>{secondsToDateTime(order.createdAt)}</p>
                </div>

                <div className="flex flex-col">
                    <p className='text-xs text-zinc-400'>Name</p>
                    <p>{order.customerName}</p>
                </div>

                <div className="flex flex-col">
                    <p className='text-xs text-zinc-400'>Email</p>
                    <p>{order.customerEmail}</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className='text-xs text-zinc-400'>Items</p>

                    {order.cartItems.length > 0 && order.cartItems.slice(0, Math.min(3, order.cartItems.length)).map(ci => (
                        <OrderCartItem ci={ci} />
                    ))}
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col gap-2 p-2 pt-10">
                        <p className='text-sm text-zinc-600'>Subtotal:</p>

                        <p className='text-sm text-zinc-600'>Tax:</p>

                        <p className='text-sm text-zinc-600'>Shipping:</p>

                        <p className='text-sm text-zinc-600'>Total:</p>
                    </div>
                    <div className="flex flex-col gap-2 p-2 pt-10">
                        <p className='text-sm text-black'>${(getSubTotal(order) / 100).toFixed(2)}</p>

                        <p className='text-sm text-black'>${(getTax(order) / 100).toFixed(2)}</p>

                        <p className='text-sm text-black'>$5.00</p>


                        <p className='text-sm text-black'>${(getTotalWTax(order) / 100).toFixed(2)}</p>
                    </div>
                </div>
            </div>}
            
        </div>
        <TabBar />
    </div>
  )
}

export default OrderView

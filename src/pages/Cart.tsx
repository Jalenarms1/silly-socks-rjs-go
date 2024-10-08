import { useCallback, useEffect, useMemo } from "react"
import { useCartContext } from "../context/CartContext"
import { MdOutlineShoppingBag } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

export const Cart = () => {
    const {cart, getCartTotal, updItemQu, submitCheckout, clearCart} = useCartContext()
    const location = useLocation()
    const total = parseFloat(getCartTotal())
    const shipping = parseFloat(getCartTotal()) >= 20 ? 0 : 5
    const tax = (total * 1.08 - total)
    
    const queryP = useMemo(() => new URLSearchParams(location.search), [location.search])
    const delItems = useCallback(() => clearCart(), [queryP])
    // if (orderStatus && orderStatus == "success") {
        //     clearCart()
    // }
        
    useEffect(() => {
        

        if (queryP.get("orderStatus")) {
           delItems()
        }


    }, [queryP, delItems])
    

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])



  return (
    <div className="min-h-screen p-6 w-full font-mono">
        <div className="border-b pb-2 border-zinc-400 mb-4">
            {queryP.get("orderStatus") != "success" ? <p className="text-5xl font-semibold text-black">Cart</p>
            : <div className="bg-green-400 text-green-800 p-3 rounded-md ">
                <p className="text-lg">
                <span className=" font-semibold">Order successful!</span> A confirmation email has been sent to your provided email address. Thanks for shopping with Silly Socks and More!</p>
            
            </div>}

        </div>
        <div className="flex sm:flex-row flex-col w-full">
            <div className="flex flex-col gap-3 sm:w-1/2">
                {cart.map((ci,i) => (
                    <div key={i} className="flex items-start p-2  gap-2 h-fit bg-zinc-900 rounded-md">
                        <div className="bg-slate-700">
                            <img
                                src={ci.product.image}
                                alt="Movie" 
                                className="w-20 h-20 shadow-sm shadow-zinc-300"
                            />
                        </div>
                        <div className="flex flex-col justify-between w-full">
                            <h2 className="text-white  text-lg mb-2">{ci.product.name}</h2>
                            <div className="flex items-center gap-2">
                                <button onClick={() => updItemQu(ci, "dec")} className="btn btn-outline btn-xs text-base flex justify-center items-center text-white ">
                                    -
                                </button>
                                <p className="text-white text-base">{ci.quantity}</p>
                                <button onClick={() => updItemQu(ci, "inc")} className="btn btn-outline btn-xs text-base flex justify-center items-center text-white ">
                                    +
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-white">${ci.total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {cart.length == 0 && <Link to={"/"} className="btn btn-outline mt-5 w-fit px-6 text-black">Shop now</Link>}
            </div>
            {cart.length > 0 && <div className="flex flex-col items-end text-black mt-5 sm:mt-0 text-base sm:w-1/2">
                <div className="py-2 flex flex-col gap-2 w-full sm:px-8">
                    <div className="flex items-center justify-between gap-10 w-full">
                        <p className="font-semibold">Subtotal:</p>
                        <p>${total}</p>
                    </div>
                    <div className="flex items-center justify-between gap-10 w-full">
                        <p className="font-semibold">Tax:</p>
                        <p>${tax.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between gap-10 w-full">
                        <p className="font-semibold">Shipping:</p>
                        <p>{total >= 20 ? "0.00" : shipping.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between gap-10 w-full">
                        <p className="font-semibold">Total:</p>
                        <p>${(total+tax+shipping).toFixed(2)}</p>
                    </div>
                </div>
                <button onClick={submitCheckout} className="btn btn-warning mt-3 flex items-center  px-6">
                    <MdOutlineShoppingBag className="text-2xl" />
                    <span className="text-base">Checkout</span>
                </button>
                

            </div>}
        </div>
        
    </div>
  )
}

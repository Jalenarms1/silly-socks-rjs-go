import React, { useEffect } from 'react'
import { useFavorites } from '../hooks/useFavorites'
import ProductCard from '../Shop/ProductCard'
import { useCartContext } from '../context/useCartContext'
import { useNavigate } from 'react-router-dom'
import Backbar from '../Shared/Backbar'
import TabBar from '../TabBar'

const SavedProductsView = () => {
    const {userFavorites, toggleFavorite} = useFavorites()
    const {addToCart, cartItems} = useCartContext()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

  return (
    <div className='min-h-screen flex flex-col relative'>
        <Backbar />
        <div className="grid grid-cols-2 md:grid-cols-6  bg-zinc-100 gap-2 p-1">
            {userFavorites.map(f => (
                <ProductCard
                    key={f.id} 
                    addToCart={() => addToCart(f)}
                    existingCartItem={cartItems.find(p => p.product.id == f.id)}
                    onNavigate={() => navigate(`/products/${f.id}`)}
                    product={f}
                />
            ))}
        </div>
        <TabBar />
    </div>
  )
}

export default SavedProductsView

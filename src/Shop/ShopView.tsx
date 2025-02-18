import React, { useEffect, useState } from 'react'
import TabBar from '../TabBar'
import ProductCarousel from './ProductCarousel'
import ProductGrid from './ProductGrid'
import SearchAndFilter from './SearchAndFilter'
import TopBar from '../TopBar'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { userCartKey, userFavoritesKey, userRecentlyViewedKey } from '../keys'
import { Product } from '../models/Cart'
import ProductCard from './ProductCard'
import { useCartContext } from '../context/useCartContext'
import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'
import { ProductViewType, useProducts } from '../hooks/useProducts'


const ShopView = () => {
  const navigate = useNavigate()

  const {userFavorites, toggleFavorite} = useFavorites()
  const [userRecentViewed, setUserRecentViewed] = useLocalStorage<Product[]>(userRecentlyViewedKey, [])
  const {products, currProductView, setCurrProductView, isLoading, searchTerm, setSearchTerm} = useProducts()

  const {addToCart, removeFromCart, cartItems} = useCartContext()


  const handleFavoriteToggle = () => {

  }

  // const getProducts = async () => {
  //   try {
  //     const resp = await fetch(import.meta.env.VITE_API_DOMAIN + "/products", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     })

  //     if (resp.status == 200) {
  //       const json = await resp.json()
        
  //       console.log(json);
  //       setProducts(() => {
  //         return json.reduce((acc, {id, name, category, description, price, quantity, image, sizes }) => {
  //           const product: Product = {
  //             id,
  //             name,
  //             category,
  //             description,
  //             price,
  //             quantity,
  //             image, 
  //             sizes
  
  //           } 
  
  //           acc.push(product)
  
  
  //           return acc
  //         }, [])
  //       })

  //     }

      
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }

  useEffect(() => {

    window.scrollTo(0,0)
  }, [])
  

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden scrollbar-hide flex flex-col font-mono bg-white">
        <TopBar />
        <div className="flex-1 flex flex-col gap-5 ">
          <div className="flex justify-between p-2">
            <p className='text-3xl font-bold hidden md:block'>Shop</p>
            <SearchAndFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} onViewChange={(view: ProductViewType) => setCurrProductView(view)} currProductView={currProductView} />

          </div>
          {/* <div className="flex justify-end text-black pr-2 items-center gap-2 ">
            <p className='text-sm text-zinc-400'>Sort by</p>
            <select name="" id="" className='border rounded-md border-zinc-200 p-1 text-sm'>
              <option value="Price: low to high" className='text-xs'>--</option>
              <option value="Price: low to high" className='text-xs'>Price: low to high</option>
              <option value="Price: low to high" className='text-xs'>Price: high to low</option>
            </select>
          </div> */}
          <div className="flex flex-col min-h-screen bg-zinc-200 pb-20">
            <ProductGrid isLoading={isLoading} products={products} renderItem={(product) => (
              <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={(size: string | null) => addToCart(product, size ?? product.sizes.split(",")[0])} 
                  existingCartItem={cartItems.find((ci) => ci.product.id == product.id)}
                  onNavigate={() => navigate(`/products/${product.id}`)}
              />
            )}/>

            {/* <div className="max-w-[100vw] bg-black flex-1 flex flex-col pb-40 overflow-x-auto pt-10">
              <p className='p-2 text-xl font-bold text-zinc-300'>Recently Viewed</p>
              <ProductCarousel  products={products} renderItem={(product: Product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={() => addToCart(product)} 
                  existingCartItem={cartItems.find((ci) => ci.product.id == product.id)}
                  onNavigate={() => navigate(`/products/${product.id}`)}
                />
              )}
              />
            </div> */}

          </div>
        </div>
        <TabBar />
      </div>
  )
}

export default ShopView

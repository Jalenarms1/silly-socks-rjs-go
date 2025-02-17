import { userFavoritesKey } from "../keys"
import { Product } from "../models/Cart"
import { useLocalStorage } from "./useLocalStorage"


export const useFavorites = () => {
    const [userFavorites, setUserFavorites] = useLocalStorage<Product[]>(userFavoritesKey, [])

    const toggleFavorite: (product: Product) => void = (product: Product) => {
        if (userFavorites.find(f => f.id == product.id)) {
            setUserFavorites(userFavorites.filter(f => f.id != product.id))
        } else {
            setUserFavorites([...userFavorites, product])
        }
    }

    return {userFavorites, toggleFavorite}

}
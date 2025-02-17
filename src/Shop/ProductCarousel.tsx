import React from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Product } from '../models/Cart';

const ProductCarousel = ({products, renderItem}: {products: Product[], renderItem: (product: Product) => React.ReactNode}) => {

    return (
        <div className="relative w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-2 px-2">
                {products.map((product, i) => (
                    renderItem(product)
                ))}

            </div>
        </div>
    );
};

export default ProductCarousel;

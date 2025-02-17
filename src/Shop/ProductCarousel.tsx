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

                {/* "See more" button */}
                <div className="w-48 flex-shrink-0 rounded-sm border active:scale-[.95] flex flex-col justify-center items-center gap-1 border-zinc-600 p-2 text-red-500">
                    <div className="flex flex-col items-center gap-2">
                        <FaRegArrowAltCircleRight className="text-4xl text-zinc-400" />
                        <p className="text-sm">See more</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;

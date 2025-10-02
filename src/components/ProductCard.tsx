import type { Product } from "../interface/Product.interface";
import { memo } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = memo(({ product }: ProductCardProps) => (
  <div className="rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1 hover:scale-105 flex flex-col">
    <div className="relative w-full h-56 overflow-hidden my-2.5 rounded-md bg-gray-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
        {product.title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 capitalize">
        {product.category}
      </p>
      <p className="text-green-600 font-bold text-lg mt-2">${product.price}</p>
      <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Add to Cart
      </button>
    </div>
  </div>
));

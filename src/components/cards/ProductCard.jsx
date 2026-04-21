"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product }) {
  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const finalPrice = price - (price * discount) / 100;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <figure className="relative p-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="rounded-xl object-cover"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-2 left-2 badge badge-error text-white">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        
        {/* Title */}
        <h2 className="card-title text-sm line-clamp-2">{title}</h2>

        {/* Rating + Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-400" />
          <span>{ratings}</span>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-400">{sold} sold</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">
            ৳{finalPrice}
          </span>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="card-actions mt-3">
          <button className="btn btn-primary w-full flex items-center gap-2">
            <FiShoppingCart />
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

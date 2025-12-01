import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  category: string;
  startingPrice: number;
  endingPrice: number;
  sizes: string[];
  colors: { name: string; value: string }[];
  badge?: string;
}

const ArrivalCard = ({
  image,
  title,
  category,
  startingPrice,
  endingPrice,
  sizes,
  colors,
  badge,
}: Props) => {
  return (
    <div className="mx-2 rounded relative cursor-pointer">
      <div className="relative h-88 my-2 overflow-hidden">
        <Image
          src={image}
          alt="product-image"
          fill
          className="object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
      <h2 className="text-black text-md">{title}</h2>
      <h3 className="text-xs text-gray-600 mb-3">{category}</h3>
      <p className="font-bold text-sm text-black">
        ${startingPrice} - {endingPrice}
      </p>
      <div className="flex gap-3 mt-1">
        {sizes.map((size, idx) => (
          <div
            key={idx}
            className="text-xs text-gray-600 p-1 px-2 border border-gray-200 rounded cursor-pointer"
          >
            {size}
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-3">
        {colors.map((color, idx) => (
          <div
            style={{ background: color.value }}
            key={idx}
            className={`p-2 outline-none rounded cursor-pointer`}
          />
        ))}
      </div>
      {badge && (
        <span className="absolute bg-red-600 font-bold rounded-full p-1 px-3 text-xs top-7 left-7">
          {badge}
        </span>
      )}
    </div>
  );
};

export default ArrivalCard;

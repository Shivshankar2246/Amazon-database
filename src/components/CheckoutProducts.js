import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/Slices/basketslice";

import React, { useState } from "react";

function CheckoutProducts({
  id,
  title,
  price,
  ratings,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      ratings,
      description,
      category,
      image,
      hasPrime,
    };

    // push item into redux store
    dispatch(addToBasket(product));
  };
  const [noOfQuantity, setNoOfQuantity] = useState(1);
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      {/* Left section */}
      <img
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
      />

      {/* right section */}
      <div className="col-span-3 mx-5 my-2">
        <p>{title}</p>
        <div className="flex">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className=" mt-2 mb-2 line-clamp-3">{description}</p>
        <Currency quantity={price} />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img className="w-12" src="http://links.papareact.com/fdw" />
            <p className="text-xs text-gray-500">Free next day delivery</p>
          </div>
        )}
      </div>

      {/* Right section */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProducts;

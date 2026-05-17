import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { fetchProductById } from "../services/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/store/cartSlice";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],

    queryFn: () => fetchProductById(id),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div
      className="
     grid
     md:grid-cols-2
     gap-6
    "
    >
      <img
        src={data.image}
        alt={data.title}
        className="
      w-full
      h-80
      object-cover
     "
      />

      <div>
        <h2
          className="
       text-xl
       font-bold
      "
        >
          {data.title}
        </h2>

        <p className="mt-2">{data.description}</p>

        <p
          className="
       font-bold
       text-lg
       mt-4
      "
        >
          ${data.price}
        </p>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.title,
                price: data.price,
                image: data.image,
              }),
            )
          }
          className="bg-primary text-white px-4 py-2 mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

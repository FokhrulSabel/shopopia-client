import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { fetchProductById } from "../services/productApi";

const ProductDetailsPage = () => {
  const { id } = useParams();

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
      </div>
    </div>
  );
};

export default ProductDetailsPage;

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
     border
     rounded
     p-4
     hover:shadow
    "
    >
      <img
        src={product.image}
        alt={product.title}
        className="
      w-full
      h-40
      object-cover
     "
        loading="lazy"
      />

      <h3
        className="
      mt-2
      font-semibold
     "
      >
        {product.title}
      </h3>

      <p
        className="
      text-primary
      font-bold
     "
      >
        ${product.price}
      </p>

      <Link
        to={`/products/${product.id}`}
        className="
      text-sm
      text-blue-500
     "
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;

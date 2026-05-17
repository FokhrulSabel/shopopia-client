const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const ProductFilters = ({ selected, setSelected }) => {
  return (
    <div className="flex gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className="
       px-3
       py-1
       border
       rounded
      "
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProductFilters;

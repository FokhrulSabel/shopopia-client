const ProductSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="
     border
     p-2
     w-full
     mb-4
    "
    />
  );
};

export default ProductSearch;

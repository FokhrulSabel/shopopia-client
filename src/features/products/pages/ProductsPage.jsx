import { useState } from "react";

import ProductGrid from "../components/ProductGrid";

import ProductSearch from "../components/ProductSearch";

import ProductFilters from "../components/ProductFilters";

import Pagination from "../components/Pagination";

import { useProducts } from "../hooks/useProducts";

const ProductsPage = () => {
  const { data, isLoading, error } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState("");

  const [page, setPage] = useState(1);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error loading products</p>;

  let products = data;

  // Search Filter

  products = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Category Filter

  if (category) {
    products = products.filter((p) => p.category === category);
  }

  // Pagination

  const perPage = 8;

  const start = (page - 1) * perPage;

  const paginated = products.slice(start, start + perPage);

  return (
    <div>
      <ProductSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ProductFilters selected={category} setSelected={setCategory} />

      <ProductGrid products={paginated} />

      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default ProductsPage;

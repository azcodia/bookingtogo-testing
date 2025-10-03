import { useEffect, useMemo, useState } from "react";
import type { Product } from "../interface/Product.interface";
import { ProductService } from "../api/services/product.services";

export const useProducts = (itemsPerPage = 8) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(1);

  // Fetch products & categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prods, cats] = await Promise.all([
          ProductService.getProducts(),
          ProductService.getCategories(),
        ]);
        setProducts(prods);
        setCategories(cats);
      } catch (error) {
        console.error("Gagal fetch products atau categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter & search
  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [products, selectedCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return {
    products,
    filteredProducts,
    currentProducts,
    loading,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};

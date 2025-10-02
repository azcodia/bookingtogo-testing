import { useEffect, useState, useMemo, Suspense, lazy } from "react";
import type { Product } from "./interface/Product.interface";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ProductCard } from "./components/ProductCard";
import { Pagination } from "./components/Pagination";
import { ProductService } from "./api/services/product.services";
import { LoadingScreen } from "./components/LoadingScreen";
import { PageMeta } from "./components/Layout";
import { SkeletonCard } from "./components/SkeletonCard";

const Banner = lazy(() =>
  import("./components/Banner").then((module) => ({ default: module.Banner }))
);

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (loading) return <LoadingScreen message="Loading products..." />;

  return (
    <PageMeta
      title="MyMarketplace"
      description="Discover amazing products on MyMarketplace"
    >
      <div
        className={`overflow-y-auto scrollbar-auto-hide ${
          darkMode
            ? "dark min-h-screen bg-gray-900"
            : "min-h-screen bg-gray-100"
        }`}
      >
        <Header
          onOpenSidebar={() => setSidebarOpen(true)}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <Suspense
          fallback={
            <div className="h-64 flex justify-center items-center">
              Loading Banner...
            </div>
          }
        >
          <Banner />
        </Suspense>

        <div className="max-w-7xl mx-auto sm:px-6 flex justify-end items-center gap-4 py-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 rounded-lg border dark:bg-gray-800 dark:text-white dark:border-gray-600"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 rounded-lg border dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
        </div>

        <main className="max-w-7xl mx-auto sm:px-6 py-10">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading
              ? Array.from({ length: itemsPerPage }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : currentProducts.map((item: Product) => (
                  <ProductCard key={item.id} product={item} />
                ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </PageMeta>
  );
};

export default App;

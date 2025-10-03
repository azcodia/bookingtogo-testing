import { Suspense, useState } from "react";
import { PageMeta } from "../components/Layout";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Banner } from "../components/Banner";
import { SkeletonCard } from "../components/SkeletonCard";
import { ProductCard } from "../components/ProductCard";
import { Pagination } from "../components/Pagination";
import { useProducts } from "../hooks/useProduct";

export const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const {
    loading,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    currentProducts,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useProducts(8);

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

        {/* Filter & Search */}
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

        {/* Products Grid */}
        <main className="max-w-7xl mx-auto sm:px-6 py-10">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : currentProducts.map((item) => (
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

import type { Product } from "../../interface/Product.interface";
import { apiClient } from "../ApiClient";

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    return apiClient.get<Product[]>("/products");
  },

  getCategories: async (): Promise<string[]> => {
    return apiClient.get<string[]>("/products/categories");
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    return apiClient.get<Product[]>(`/products/category/${category}`);
  },
};

import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { groupBy } from 'lodash';
import { formatPrice } from '../utils/formatPrice';
import { search } from '../utils/buscaBr';
import api from '../service/api';
import { Category } from '../contexts/DashboardContext';

export interface Product {
  id: number;
  title: string;
  price: number;
  amount: number;
  image: string;
  priceFormatted: string;
  categoryId: Category;
}

interface UseProductsResponse {
  loading: boolean;
  products: Product[];
  currentProducts: Product[];
  productsGroupedByCategory: { [key: number]: Product[] };
  fetchProducts: (filter?: string | undefined) => Promise<void>;
}

const useProductList = (category: number): UseProductsResponse => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const productsGroupedByCategory = useMemo(
    () => groupBy(products, (p) => p.categoryId),
    [products],
  );

  const currentProducts = useMemo(
    () => (category === Category.All
      ? products
      : productsGroupedByCategory[category] || []),
    [category, products, productsGroupedByCategory],
  );

  const fetchProducts = useCallback(
    async (filter: string | undefined = undefined) => {
      setLoading(true);
      try {
        const response = await api.get<Product[]>(
          '/fcfaaad4-5e2d-44c1-97ff-4bc092d2349e',
        );

        const data = response.data.map((product) => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));

        if (!filter) {
          setProducts(data);
          return;
        }

        const result = search(
          filter,
          data.map((product) => product.title),
        );

        setProducts(data.filter((x) => result.includes(x.title)));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const value = useMemo<UseProductsResponse>(
    () => ({
      loading,
      products,
      currentProducts,
      productsGroupedByCategory,
      fetchProducts,
    }),
    [
      loading,
      products,
      currentProducts,
      productsGroupedByCategory,
      fetchProducts,
    ],
  );
  return value;
};

export default useProductList;

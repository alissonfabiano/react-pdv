import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import { FiSearch } from 'react-icons/fi';
import Layout from '../../components/Layout';

import * as s from './styled';
import CategoryCarousel from '../../components/CategoryCarousel';
import ProductContextProvider, {
  useProductContext,
} from '../../contexts/ProductContext';
import useProductList from '../../hooks/useProductList';
import { ProductList } from '../../components/ProductList';
import Loader from '../../components/Loader';

const ProductComponent: React.FC = () => {
  const { category, setCategory } = useProductContext();
  const { loading, currentProducts, fetchProducts } = useProductList(category);
  return (
    <Layout>
      <s.Header>
        <s.Title>Produtos</s.Title>
        <s.Action>Adicionar Produto</s.Action>
      </s.Header>
      <s.Search>
        <FiSearch size="24px" color="grey" />
        <DebounceInput
          placeholder="Pesquisar Produtos"
          minLength={2}
          debounceTimeout={300}
          onChange={(event) => fetchProducts(event.target.value)}
          element={s.SearchInput}
        />
      </s.Search>
      <CategoryCarousel setCategory={setCategory} />
      {loading ? (
        <Loader />
      ) : (
        <ProductList>
          {currentProducts.map((product) => (
            <li key={product.id} aria-hidden="true">
              <img src={product.image} alt={product.title} />
              <span>
                <strong>{product.title}</strong>
                <p>{product.priceFormatted}</p>
              </span>
            </li>
          ))}
        </ProductList>
      )}
    </Layout>
  );
};

const Product: React.FC = () => (
  <ProductContextProvider>
    <ProductComponent />
  </ProductContextProvider>
);

export default Product;

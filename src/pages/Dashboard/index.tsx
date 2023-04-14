import React from 'react';
import { useDispatch } from 'react-redux';

import {
  FiDollarSign,
  FiCreditCard,
  FiHardDrive,
  FiSearch,
  FiEye,
} from 'react-icons/fi';
import { DebounceInput } from 'react-debounce-input';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../styles/carrousel.css';
// eslint-disable-next-line import/no-duplicates
import format from 'date-fns/format';
// eslint-disable-next-line import/no-duplicates
import ptBR from 'date-fns/locale/pt-BR';
import * as s from './styled';
import Layout from '../../components/Layout';

import pix from '../../assets/images/pix.svg';
import { ProductList } from '../../components/ProductList';
import DashboardContextProvider, {
  useDashboardContext,
} from '../../contexts/DashboardContext';
import CategoryCarousel from '../../components/CategoryCarousel';
import useProductList, { Product } from '../../hooks/useProductList';
import Loader from '../../components/Loader';

export interface Stock {
  id: number;
  amount: number;
}

export interface Category {
  id: number;
  title: string;
  image: string;
}

export interface Cart {
  cart: Product[];
}

const DashboardComponent: React.FC = () => {
  const { category, setCategory } = useDashboardContext();
  const { loading, currentProducts, fetchProducts } = useProductList(category);

  const dispatch = useDispatch();

  function handleAddProduct(product: Product) {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  return (
    <Layout>
      <s.Header>
        <s.Title>Painel de Venda</s.Title>
        <s.Info>
          <span className="cashier">CAIXA ABERTO</span>
          <span className="date">
            {format(new Date(), "eeee, d 'de' MMMM yyyy", {
              locale: ptBR,
            })}
          </span>
        </s.Info>
      </s.Header>
      <s.CardContainer>
        <s.Card>
          <header>
            <p>Dinheiro</p>
            <FiDollarSign size="24px" color="green" />
          </header>
          <section>
            <p>R$</p>
            <h1>0,00</h1>
          </section>
        </s.Card>
        <s.Card>
          <header>
            <p>Pix</p>
            <img src={pix} alt="Pix" />
          </header>
          <section>
            <p>R$</p>
            <h1>0,00</h1>
          </section>
        </s.Card>
        <s.Card>
          <header>
            <p>Débito</p>
            <FiCreditCard size="24px" color="red" />
          </header>
          <section>
            <p>R$</p>
            <h1>0,00</h1>
          </section>
        </s.Card>
        <s.Card>
          <header>
            <p>Crédito</p>
            <FiCreditCard size="24px" color="orange" />
          </header>
          <section>
            <p>R$</p>
            <h1>0,00</h1>
          </section>
        </s.Card>
        <s.Card>
          <header>
            <p>Fiado</p>
            <FiEye size="24px" color="purple" />
          </header>
          <section>
            <p>R$</p>
            <h1>0,00</h1>
          </section>
        </s.Card>
        <s.Card>
          <header>
            <p>Caixa</p>
            <FiHardDrive size="24px" color="grey" />
          </header>
          <section>
            <p>R$</p>
            <h1>0,00</h1>
          </section>
        </s.Card>
      </s.CardContainer>
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
            <li
              key={product.id}
              aria-hidden="true"
              onClick={() => handleAddProduct(product)}
            >
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

const Dashboard: React.FC = () => (
  <DashboardContextProvider>
    <DashboardComponent />
  </DashboardContextProvider>
);

export default Dashboard;

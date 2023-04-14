/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineScan } from 'react-icons/ai';
import { MdDialpad } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  FiPlusCircle,
  FiMinusCircle,
  FiDollarSign,
  FiSlash,
} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Select, { components } from 'react-select';
import Profile from '../Profile';
import discount from '../../assets/images/discount.svg';

import * as s from './styled';
import { formatPrice } from '../../utils/formatPrice';
import { categories } from '../CategoryCarousel';

const { SingleValue, Option } = components;

const IconSingleValue = (props: any) => (
  <SingleValue {...props}>
    <img
      src={props.data.image}
      alt=""
      style={{
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        marginRight: '10px',
      }}
    />
    {props.data.label}
  </SingleValue>
);

const IconOption = (props: any) => (
  <Option {...props}>
    <img
      src={props.data.image}
      alt=""
      style={{
        height: 48,
        width: 48,
        borderRadius: '50%',
        marginRight: '10px',
      }}
    />
    {props.data.label}
  </Option>
);

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    width: 300,
  }),
};

export interface Props {
  isSmall?: boolean;
}

export interface Stock {
  id: number;
  amount: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export interface Cart {
  cart: Product[];
}

const Sidebar: React.FC<Props> = ({ isSmall }) => {
  const cart = useSelector((state: Cart) =>
    state.cart.map((product) => ({
      ...product,
    })),
  );

  const history = useHistory();

  const dispatch = useDispatch();

  function handleIncreaseProduct(product: Product) {
    dispatch({ type: 'INCREASE_QUANTITY', payload: product });
  }

  function handleDecreaseProduct(product: Product) {
    dispatch({ type: 'DECREASE_QUANTITY', payload: product });
  }

  if (history.location.pathname.includes('/product')) {
    const options = categories.map((option) => ({
      value: option.id,
      label: option.title,
      image: option.image,
    }));

    return (
      <s.SidebarWrapper>
        <div>
          Categoria
          <Select
            options={options}
            styles={customStyles}
            components={{ SingleValue: IconSingleValue, Option: IconOption }}
          />
        </div>
        <div>
          Nome do produto
          <s.InputContainer>
            <s.Input />
          </s.InputContainer>
        </div>
        <div>
          Quantidade disponível
          <s.InputContainer>
            <s.Input />
          </s.InputContainer>
        </div>
        <div>
          Valor de compra
          <s.InputContainer>
            <s.Input />
          </s.InputContainer>
        </div>
        <div>
          Valor de venda
          <s.InputContainer>
            <s.Input />
          </s.InputContainer>
        </div>
        <div>
          Imagem
          <img src="" alt="" height="30px" width="30px" />
        </div>
      </s.SidebarWrapper>
    );
  }

  return (
    <s.SidebarWrapper>
      <Profile />
      <s.InputWrapper>
        <div>
          <label htmlFor="product_cod">Cód. Produto</label>
          <s.InputBox>
            <s.Input id="product_cod" />
            <AiOutlineScan size="24px" color="grey" />
          </s.InputBox>
        </div>
        <div>
          <label htmlFor="quantity">Quantidade</label>
          <s.InputBox isSmall={isSmall}>
            <s.Input id="quantity" />
            <MdDialpad size="24px" color="grey" />
          </s.InputBox>
        </div>
      </s.InputWrapper>
      <hr />
      <s.Receipt>
        <s.Header>
          <div>Descrição</div>
          <div style={{ marginRight: 12 }}>Qnt.</div>
        </s.Header>
        {cart.map((p) => (
          <s.Item key={p.id}>
            <div>{p.title}</div>
            <s.ButtonGroup>
              <button type="button" onClick={() => handleDecreaseProduct(p)}>
                <FiMinusCircle size="16px" color="grey" />
              </button>
              <span>{p.amount}</span>
              <button type="button" onClick={() => handleIncreaseProduct(p)}>
                <FiPlusCircle size="16px" color="grey" />
              </button>
            </s.ButtonGroup>
          </s.Item>
        ))}
      </s.Receipt>
      <hr />
      <s.Total>
        <div>Valor total</div>
        <div>
          {formatPrice(
            cart.reduce((partialSum, a) => partialSum + a.price * a.amount, 0),
          )}
        </div>
      </s.Total>
      <s.Bill>
        <div>
          <FiDollarSign size="48px" color="green" />
          <span style={{ color: 'green' }}>Finalizar Compra</span>
        </div>
        <div>
          <img src={discount} alt="Discount" />
          <span style={{ color: '#fcbb40' }}>Aplicar Desconto</span>
        </div>
        <div>
          <FiSlash size="48px" color="red" />
          <span style={{ color: 'red' }}>Cancelar Compra</span>
        </div>
      </s.Bill>
    </s.SidebarWrapper>
  );
};

export default Sidebar;

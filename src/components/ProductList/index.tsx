import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;

    background: #f1f4f6;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      width: 128px;
      height: 128px;
      border: 1px solid #f0f2f5;
      box-sizing: border-box;
      border-radius: 32px;
      margin: 0 5px;
      object-fit: cover;
      border: 5px solid white;
    }

    > span {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex: 1;
      align-items: baseline;
      > strong {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: -0.34px;

        color: #000000;
      }
      > p {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: right;
        letter-spacing: -0.34px;

        color: #de0000;
      }
    }

    button {
      border: 0;
      border-radius: 4px;
      overflow: hidden;

      display: flex;
      align-items: center;
      transition: color 0.2s;
      background: transparent;

      &:hover {
        color: ${darken(0.03, 'red')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;

        svg {
          margin-right: 5px;
        }
      }

      span {
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

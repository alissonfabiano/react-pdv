import styled from 'styled-components';
import media from 'styled-media-query';
import { darken } from 'polished';

import { Props } from '.';

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #edf0f3;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  width: 400px;

  ${media.lessThan('large')`
    bottom: 0;
    flex-direction: row;
    height: 200px;
    padding: 0;
    position: fixed;
    width: 100%;
    justify-content: space-evenly;
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-top: 31px;
  div + div {
    margin-left: 8px;
    flex: 1;
  }
  > div:first-child {
    width: 197px;
  }
  label {
    font-size: 14px;
    line-height: 16px;
    color: #292c48;
    font-weight: 300;
    display: block;
    text-align: left;
    padding-left: 20px;
    margin-bottom: 3px;
  }
`;

export const InputBox = styled.div<Props>`
  display: flex;
  align-items: center;
  height: 50px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(218, 218, 218);
  border-image: initial;
  border-radius: 24px;
  padding: ${(props) => (props.isSmall ? '0 17px' : '0 24px')};
`;

export const InputContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;
  min-height: 0px;
  height: 50px;
  flex-direction: row;
  margin: 40px 0;
  padding-left: 24px;
  padding-right: 24px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(218, 218, 218);
  border-image: initial;
  border-radius: 24px;

  &::placeholder {
    color: #dadada;
  }
`;

export const Input = styled.input`
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  color: rgb(68, 68, 68);
  background: transparent;
  border: 0;
  outline: none;
  -webkit-font-smoothing: antialiased !important;
  &::placeholder {
    color: #dadada;
  }
`;

export const Receipt = styled.ul`
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 20px;
  background: #fff9d8;
  box-shadow: 5px 2px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Header = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: initial;
    display: flex;
    letter-spacing: -0.34px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  button {
    border: 0;
    border-radius: 4px;
    overflow: hidden;

    display: flex;
    align-items: center;
    transition: color 0.2s;
    background: transparent;
    padding: 4px;
    &:hover {
      color: ${darken(0.03, 'red')};
    }
  }

  button:last-of-type {
    padding-right: 0px;
  }

  span {
    text-align: center;
    font-weight: bold;
    font-size: 1.4em;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: red;
  margin-bottom: 24px;

  div {
    text-align: center;
    font-weight: bold;
    font-size: 2em;
  }
`;

export const Bill = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #758ca3;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 48px;
      height: 48px;
      object-fit: cover;
    }
  }
`;

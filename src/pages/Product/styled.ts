import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.div`
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  color: #292c48;
  ${media.lessThan('large')`
  padding: 0px 1.4rem;
  `}
`;

export const Action = styled.button`
  font-size: 18px;
  text-align: right;
  color: #292c48;
  text-transform: capitalize;
`;

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
  }
`;

export const Search = styled.div`
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

export const SearchInput = styled.input`
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  color: rgb(68, 68, 68);
  border: 0;
  padding: 0 1rem;
  outline: none;
  -webkit-font-smoothing: antialiased;
`;

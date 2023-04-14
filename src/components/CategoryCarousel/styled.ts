import styled from 'styled-components';
import media from 'styled-media-query';

export const CategoryContainer = styled.div`
  position: relative;
  height: 208px;
  margin: auto 10px;
  overflow: hidden;
`;

export const CategoryItem = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  margin: 25px auto;
  max-width: 116px;
  height: 144px;
  padding: 18px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  header {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin-top: 10px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #292c48;
    }
    img {
      height: 96px;
    }
  }

  &:hover {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
  }

  ${media.greaterThan('large')`
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: auto;
    margin: 25px;
    max-width: 100%;
    height: auto;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    transition: 0.3s;

    header {
      display: flex;
      height: 100%;
      align-items: center;
      flex-direction: column-reverse;
      justify-content: space-between;
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin-top: 10px;
        line-height: 19px;
        letter-spacing: -0.274286px;
        color: #292c48;
      }
    }

    &:hover {
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
      transform: scale(1.2);
    }
  `}
`;

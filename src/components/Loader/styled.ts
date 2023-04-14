import styled, { keyframes } from 'styled-components';

const rotate1 = keyframes`
  from {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0);
  }

  to {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(1turn);
  }
`;

const rotate2 = keyframes`
  from {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0);
  }

  to {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(1turn);
  }
`;

const rotate3 = keyframes`
  from {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0);
  }

  to {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(1turn);
  }
`;

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    width: 4rem;
    height: 4rem;
    transform-style: preserve-3d;
    perspective: 800px;

    div {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border-bottom: 3px solid green;

      &:nth-child(1) {
        animation-delay: -0.8s;
        animation: ${rotate1} 1.15s linear infinite;
      }

      &:nth-child(2) {
        animation-delay: -0.4s;
        animation: ${rotate2} 1.15s linear infinite;
      }

      &:nth-child(3) {
        animation-delay: 0s;
        animation: ${rotate3} 1.15s linear infinite;
      }
    }
  }
`;

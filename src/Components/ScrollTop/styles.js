import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
    margin-top: 0;
  }

  50% {
    margin-top: 6px;
  }
  100% {
    margin-top: 0;
  }
`

export const ScrollTopContainer = styled.a`
  background-color: #0c7e7e;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  bottom: 32px;
  right: 32px;
  cursor: pointer;

  img {
    height: 25px;
    width: 25px;

    &:hover {
      animation: ${bounce} 0.3s infinite ease-in-out;
    }
  }
`

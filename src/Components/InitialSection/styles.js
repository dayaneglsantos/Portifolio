import styled, { keyframes } from 'styled-components'
import { Container } from '../SectionContainer/styles'

const bounce = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
`

export const InitialSectionContainer = styled.section`
  background-color: #000706;

  ${Container} {
    max-width: 1220px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  h1 {
    text-align: center;
    width: 90%;
    @media (min-width: 768px) and (max-width: 1024px) {
      img {
        width: 75%;
      }
    }
    @media (max-width: 768px) {
      img {
        width: 80%;
      }
    }
  }
`
export const PresentationImage = styled.img`
  height: 60%;
  animation: ${bounce} 3s infinite alternate ease-in-out;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 40%;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const Media = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 36px;

  li {
    padding: 8px;
    transition: transform 0.3s ease-in-out;

    img {
      height: 42px;
      background-color: #fff;
      border-radius: 50%;
      border: 0.5px solid #fff;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`

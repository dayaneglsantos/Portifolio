import styled from 'styled-components'
import { Container } from '../SectionContainer/styles'

export const AboutContainer = styled.section`
  background-color: #00272d;

  ${Container} {
    color: #fff;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 120px;

    @media (max-width: 768px) {
      gap: 0;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 64px;
      font-size: 14px;

      @media (max-width: 768px) {
        display: block;
        width: 80%;
        padding: 32px 0;
        font-size: 12px;
        text-align: justify;
      }
    }
  }

  h2 {
    color: #fff;
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    margin-top: 24px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  .location {
    margin-top: 32px;
    display: block;
  }

  .profilePicture {
    height: 220px;
    border-radius: 50%;
    display: block;

    @media (max-width: 768px) {
      height: 160px;
      margin: 0 auto;
      margin-bottom: 24px;
    }
  }
`

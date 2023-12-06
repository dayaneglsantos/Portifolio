import styled from 'styled-components'
import { Container } from '../SectionContainer/styles'

export const AboutContainer = styled.section`
  background-color: #00272d;

  ${Container} {
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      gap: 0;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 64px;
      font-size: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;

      @media (max-width: 768px) {
        width: 80%;
        padding: 32px 0;
        font-size: 12px;
        text-align: justify;
      }

      @media (max-width: 767px) {
        display: block;
        margin-top: 24px;
      }
    }

    h2 {
      color: #fff;
      font-size: 32px;
      text-align: center;
      text-transform: uppercase;
      font-family: 'Playfair Display', serif;
      margin-top: 48px;

      @media (max-width: 768px) {
        font-size: 24px;
        margin-top: 24px;
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
        margin: 24px auto;
      }
    }
  }
`

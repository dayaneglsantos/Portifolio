import styled from 'styled-components'
import { Container } from '../SectionContainer/styles'

export const SkillsContainer = styled.div`
  background-color: #134647;

  ${Container} {
    display: flex;
    flex-direction: column;
    width: 55%;
    position: relative;

    h2 {
      color: #fff;
      font-size: 32px;
      text-align: center;
      text-transform: uppercase;
      font-family: 'Playfair Display', serif;
      margin-top: 48px;

      @media (max-width: 768px) {
        margin-top: 24px;
      }
    }

    .items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      grid-template-columns: repeat(5, 1fr);
      gap: 32px;
      margin-top: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;

      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin-top: 60px;
      }

      .item {
        text-align: center;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover {
          transform: scale(1.1);
          img {
            transform: rotate(360deg);
          }

          span {
            display: flex;
          }
        }

        img {
          height: 80px;
          margin-bottom: 12px;
          transition: transform 0.3s ease-in-out;

          @media (max-width: 768px) {
            height: 80px;
          }
        }

        span {
          color: #fff;
        }
      }
    }
  }
`

import styled from 'styled-components'
import { Container } from '../SectionContainer/styles'

export const ProjectsContainer = styled.section`
  background-color: #bfac8b;

  ${Container} {
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: #2b2019;
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    /* text-shadow: 2px 2px 2px #00272d; */
    margin-top: 24px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  ul {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 32px;
    padding: 34px 0 64px;

    @media (min-width: 768px) and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      margin: 0 auto;
    }
  }
`

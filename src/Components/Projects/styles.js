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
    margin-top: 48px;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-top: 24px;
    }
  }

  ul {
    padding: 34px 0;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1220px;
  width: 80%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-top: 65px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

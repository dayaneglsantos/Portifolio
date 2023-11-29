import styled from 'styled-components'

export const FooterContainer = styled.div`
  text-align: center;
  padding: 24px;
  background-color: #000706;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .email {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    img {
      height: 28px;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

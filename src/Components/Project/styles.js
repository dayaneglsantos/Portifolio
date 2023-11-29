import styled from 'styled-components'

export const ProjectContainer = styled.li`
  background-color: #d4bf9b;
  border: 1px solid #2b2019;
  border-radius: 6px;
  padding: 12px;
  text-align: center;
  transition: transform 0.4s ease-in-out;
  transform: scale(1);
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  &:hover {
    transform: scale(1.1);
    border: 2px solid #2b2019;
  }

  img {
    display: block;
    margin-bottom: 24px;
    border-radius: 8px;
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: center;
    height: 100%;

    h3 {
      color: #2b2019;
      font-weight: bold;
    }

    p {
      margin: 12px 0;
      font-size: 12px;
      color: #000706;
    }

    a {
      text-decoration: none;
      display: block;
      color: #2b2019;
      font-weight: bold;
      margin-top: 12px;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

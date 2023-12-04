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
  width: 100%;
  margin-bottom: 42px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  &:hover {
    transform: scale(1.1);
    border: 2px solid #2b2019;
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    /* height: 100%; */

    h3 {
      color: #2b2019;
      font-weight: bold;
    }

    p {
      margin: 12px 0;
      font-size: 12px;
      color: #000706;
      text-align: justify;
    }

    a {
      text-decoration: none;
      display: block;
      color: #2b2019;
      font-weight: bold;
      margin-top: 12px;
      font-size: 14px;

      &:hover {
        color: #0c7e7e;
      }
    }
  }
`
export const ProjectImage = styled.img`
  height: 100%;
  border-radius: 8px;
  order: ${(props) => (props.className === 'left' ? 0 : 1)};

  @media (max-width: 767px) {
    order: 0;
    margin-bottom: 24px;
  }
`

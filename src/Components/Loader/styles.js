import styled from 'styled-components'

export const LoaderContainer = styled.div`
  background-color: #134647;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 48px;
    height: 40px;
    margin-top: 30px;
    display: inline-block;
    position: relative;
    background: #000706;
    border-radius: 15% 15% 35% 35%;
  }
  .loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 45px;
    top: 8px;
    border: 4px solid #000706;
    width: 16px;
    height: 20px;
    border-radius: 0 4px 4px 0;
  }
  .loader::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 10px;
    color: #000706;
    top: -15px;
    left: 11px;
    box-sizing: border-box;
    animation: animloader 1s ease infinite;
  }

  @keyframes animloader {
    0% {
      box-shadow:
        2px 0px rgba(255, 255, 255, 0),
        12px 0px rgba(255, 255, 255, 0.3),
        20px 0px rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow:
        2px -5px rgba(255, 255, 255, 0.7),
        12px -3px rgba(255, 255, 255, 0.8),
        20px -2px rgba(255, 255, 255, 0.7);
    }
    100% {
      box-shadow:
        2px -8px rgba(255, 255, 255, 0),
        12px -5px rgba(255, 255, 255, 0),
        20px -5px rgba(255, 255, 255, 0);
    }
  }
`

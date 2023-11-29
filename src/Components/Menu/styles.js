import styled from 'styled-components'
import { NavContainer } from '../Navbar/styles'
import { LinkContainer } from '../NavLink/styles'

export const MenuContainer = styled.div`
  background-color: #000706;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 48px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    padding: 8px 28px;
  }

  img {
    height: 52px;
  }
`
export const ButtonMenu = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  display: none;
  height: 42px;
  width: 42px;

  img {
    height: 28px;
    width: 28px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

// MENU MOBILE

export const MenuMobileContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  z-index: 1;
`

export const MenuMobile = styled.div`
  background-color: #fff;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 2;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: fixed;
    top: 32px;
    right: 24px;
    height: 32px;
    width: 32px;
    background-color: #0c7e7e;
    border-radius: 50%;
  }

  ${NavContainer} {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  ${LinkContainer} {
    color: #000706;
    background: rgb(19, 70, 71);
    background: linear-gradient(
      90deg,
      rgba(19, 70, 71, 1) 0%,
      rgba(239, 239, 240, 0.6502976190476191) 46%,
      rgba(19, 70, 71, 1) 100%
    );
    margin-right: 0;
  }
`
export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
`

import {
  ButtonMenu,
  Container,
  MenuContainer,
  MenuMobile,
  MenuMobileContainer
} from './styles'
import Navbar from '../Navbar'
import NavLink from '../NavLink'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import menu from '../../assets/Images/menu.png'
import close from '../../assets/Images/close.png'

const Menu = ({ links = [], logoLink, logoImg }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <MenuContainer>
        <Link to={logoLink}>
          <img src={logoImg} alt="logo" />
        </Link>

        <Navbar>
          {links.map((link) => (
            <NavLink href={link.url} key={link.linkText}>
              {link.linkText}
            </NavLink>
          ))}
        </Navbar>
        <ButtonMenu onClick={() => setMenuOpen(true)}>
          <img src={menu} alt="menu icon" />
        </ButtonMenu>
      </MenuContainer>
      {menuOpen ? (
        <MenuMobileContainer>
          <Container onClick={() => setMenuOpen(false)} />
          <MenuMobile>
            <img
              src={close}
              alt="Botão fechar"
              onClick={() => setMenuOpen(false)}
            />
            <Navbar>
              {links.map((link) => (
                <NavLink
                  href={link.url}
                  key={link.linkText}
                  oncLick={() => setMenuOpen(false)}
                >
                  {link.linkText}
                </NavLink>
              ))}
            </Navbar>
          </MenuMobile>
        </MenuMobileContainer>
      ) : (
        ''
      )}
    </>
  )
}

export default Menu

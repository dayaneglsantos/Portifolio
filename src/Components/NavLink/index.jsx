import { LinkContainer } from './styles'

const NavLink = ({ children, href, oncLick }) => {
  return (
    <LinkContainer href={href} onClick={oncLick}>
      {children}
    </LinkContainer>
  )
}

export default NavLink

import { FooterContainer } from './styles'
import email from '../../assets/Images/email.png'

const Footer = ({ text }) => {
  return (
    <FooterContainer>
      <p>{text}</p>
      <div className="email">
        <img src={email} alt="" />
        <span>dayane0204@hotmail.com</span>
      </div>
    </FooterContainer>
  )
}

export default Footer

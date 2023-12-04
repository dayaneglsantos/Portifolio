import { ScrollTopContainer } from './styles'
import arrowUp from '../../assets/Images/arrowUp.png'

const ScrollTop = () => {
  return (
    <ScrollTopContainer href="#">
      <img src={arrowUp} alt="Botão ir para topo" />
    </ScrollTopContainer>
  )
}
export default ScrollTop

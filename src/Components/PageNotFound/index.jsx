import { Page404 } from './styles'
import erro from '../../assets/Images/erro.png'

const PageNotFound = () => {
  return (
    <Page404>
      <img src={erro} alt="Icone triste" />
      <h1>Página não encontrada</h1>
      <p>
        Clique <a href="/">aqui</a> para voltar a página principal
      </p>
    </Page404>
  )
}
export default PageNotFound

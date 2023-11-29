import SectionContainer from '../SectionContainer'
import { AboutContainer } from './styles'

const About = ({ title, id, text, location, url }) => {
  return (
    <AboutContainer id={id}>
      <SectionContainer>
        <h2>{title}</h2>
        <div>
          <img src={url} alt="Foto do perfil" className="profilePicture" />
          <div>
            <p>{text}</p>

            <span className="location"> {location}</span>
          </div>
        </div>
      </SectionContainer>
    </AboutContainer>
  )
}
export default About

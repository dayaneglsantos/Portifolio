import { ProjectContainer, ProjectImage } from './styles'
import P from 'prop-types'

const Project = ({
  name,
  description,
  image,
  repLink,
  siteLink,
  imgLeft = true
}) => {
  return (
    <ProjectContainer>
      <ProjectImage src={image} alt={name} className={imgLeft ? 'left' : ''} />
      <div className="infos">
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <a href={repLink} target="_blank" rel="noreferrer">
            Repositório
          </a>
          <a href={siteLink} target="_blank" rel="noreferrer">
            Projeto online
          </a>
        </div>
      </div>
    </ProjectContainer>
  )
}
export default Project

Project.propTypes = {
  imgLeft: P.bool.isRequired
}

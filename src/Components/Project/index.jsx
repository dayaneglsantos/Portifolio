import { ProjectContainer } from './styles'

const Project = ({ name, description, image, repLink, siteLink }) => {
  return (
    <ProjectContainer>
      <img src={image} alt={name} />
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

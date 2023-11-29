import Project from '../Project'
import SectionContainer from '../SectionContainer'
import { ProjectsContainer } from './styles'

const Projects = ({ projects = [], title, id }) => {
  return (
    <ProjectsContainer id={id}>
      <SectionContainer>
        <h2>{title}</h2>

        <ul>
          {projects.map((proj) => (
            <Project
              key={proj.projectTitle}
              name={proj.projectTitle}
              description={proj.description}
              image={proj.url}
              repLink={proj.repository}
              siteLink={proj.site}
            />
          ))}
        </ul>
      </SectionContainer>
    </ProjectsContainer>
  )
}
export default Projects

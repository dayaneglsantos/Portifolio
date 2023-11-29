import { SkillsContainer } from './styles'

import SectionContainer from '../SectionContainer'

const Skills = ({ title, id, skill }) => {
  return (
    <SkillsContainer id={id}>
      <SectionContainer>
        <h2>{title}</h2>
        <div className="items">
          {skill.map((item) => (
            <div className="item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </SectionContainer>
    </SkillsContainer>
  )
}
export default Skills

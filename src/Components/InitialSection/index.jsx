import { useState } from 'react'

import { InitialSectionContainer, Media, PresentationImage } from './styles'

import SectionContainer from '../SectionContainer'

const InitialSection = ({ id, nameImg, mainImg, mediaLinks }) => {
  const [githubHover, setGithubHover] = useState(false)
  const [linkedinHover, setLinkedinHover] = useState(false)
  const [instagramHover, setInstagramHover] = useState(false)
  // const [mediaHover, setMediaHover] = useState(false)

  const mediaHover = (index) => {
    switch (index) {
      case 0:
        return githubHover
      case 1:
        return linkedinHover
      case 2:
        return instagramHover
    }
  }

  const handleMouseOver = (index) => {
    switch (index) {
      case 0:
        setGithubHover(true)
        return
      case 1:
        setLinkedinHover(true)
        return
      case 2:
        setInstagramHover(true)
        return
    }
  }

  const handleMouseOut = (index) => {
    switch (index) {
      case 0:
        setGithubHover(false)
        return
      case 1:
        setLinkedinHover(false)
        return
      case 2:
        setInstagramHover(false)
        return
    }
  }

  return (
    <InitialSectionContainer id={id}>
      <SectionContainer>
        <div>
          <h1>
            <img src={nameImg} alt="Nome" />
          </h1>
          <Media>
            {mediaLinks.map((media, index) => (
              <li
                key={media.mediaName}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut(index)}
              >
                <a href={media.mediaLink}>
                  <img
                    src={
                      mediaHover(index) ? media.mediaLogoColor : media.mediaLogo
                    }
                    target="_blank"
                    alt={media.mediaName}
                  />
                </a>
              </li>
            ))}
          </Media>
        </div>
        <PresentationImage src={mainImg} />
      </SectionContainer>
    </InitialSectionContainer>
  )
}
export default InitialSection

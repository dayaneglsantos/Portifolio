const mapSection = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section') {
      return mapInitialSection(section)
    }
    if (section.__component === 'section.presentation-section') {
      return mapPresentationSection(section)
    }
    if (section.__component === 'section.projects-section') {
      return mapProjectsSection(section)
    }
    if (section.__component === 'section.skills-section') {
      return mapSkillsSection(section)
    }
    return section
  })
}

export default mapSection

export const mapInitialSection = (section = {}) => {
  const {
    section_title: title = '',
    section_id: id = '',
    name_img: {
      data: {
        attributes: { url: nameImg = '' }
      }
    },
    media_links: mediaLinks = [],
    main_img: {
      data: {
        attributes: { url: mainImg = '' }
      }
    }
  } = section
  return {
    title,
    id,
    nameImg,
    mainImg,
    mediaLinks: mediaLinks.map((media) => {
      const {
        url: mediaLink = '',
        media_name: mediaName = '',
        media_logo: {
          data: {
            attributes: { url: mediaLogo = '' }
          }
        },
        url_color: {
          data: {
            attributes: { url: mediaLogoColor = '' }
          }
        }
      } = media

      return { mediaLogo, mediaLink, mediaName, mediaLogoColor }
    })
  }
}

export const mapPresentationSection = (section = {}) => {
  const {
    section_title: title = '',
    section_id: id = '',
    presentation_text: text = '',
    location = '',
    profile_img: {
      data: {
        attributes: { url = '' }
      }
    }
  } = section

  return {
    title,
    id,
    text,
    location,
    url
  }
}
export const mapProjectsSection = (section = {}) => {
  const {
    section_title: title = '',
    section_id: id = '',
    project = []
  } = section

  return {
    title,
    id,
    projects: project.map((project) => {
      const {
        project_title: projectTitle = '',
        project_description: description = '',
        repository_url: repository = '',
        site_url: site = '',
        project_img: {
          data: {
            attributes: { url = '' }
          }
        }
      } = project
      return {
        projectTitle,
        description,
        repository,
        site,
        url
      }
    })
  }
}
export const mapSkillsSection = (section = {}) => {
  const { section_title: title = '', section_id: id = '', skill = [] } = section

  return {
    title,
    id,
    skill: skill.map((item) => {
      const {
        skill_image: {
          data: {
            attributes: { url: image = '' }
          }
        },
        skill_name: name = ''
      } = item
      return {
        image,
        name
      }
    })
  }
}

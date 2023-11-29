const mapMenu = (menu = {}) => {
  const {
    logo_link: logoLink = '',
    logo_img: {
      data: {
        attributes: { url: logoImg = '' }
      }
    },
    menu_link: links = []
  } = menu

  return {
    logoLink,
    logoImg,
    links: mapLinks(links)
  }
}

export const mapLinks = (links = []) => {
  return links.map((item) => {
    const { link_text: linkText = '', url = '' } = item

    return { linkText, url }
  })
}

export default mapMenu

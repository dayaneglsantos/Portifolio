import mapMenu from './map-menu'
import mapSection from './map-section'

const mapData = (pageData = [{}]) => {
  return pageData.map((data) => {
    const {
      Footer: footer = '',
      Menu: menu = {},
      Section: section = [],
      Title: title = ''
    } = data
    return {
      title,
      footer,
      menu: mapMenu(menu),
      section: mapSection(section)
    }
  })
}

export default mapData

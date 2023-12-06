import { useEffect, useRef, useState } from 'react'

import About from '../../Components/About'
import InitialSection from '../../Components/InitialSection'
import Menu from '../../Components/Menu'
import Projects from '../../Components/Projects'

import mapData from '../../Api/map-data'
import Footer from '../../Components/Footer'
import ScrollTop from '../../Components/ScrollTop'
import Loader from '../../Components/Loader'
import PageNotFound from '../../Components/PageNotFound'
import Skills from '../../Components/Skills'

const Home = () => {
  const [data, setData] = useState([])
  const pageMounted = useRef(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const json = await fetch(
          'https://portifolio-backend-84e824094ad3.herokuapp.com/api/portifolios/?populate=deep&pagination[pageSize]=1&sort[0]=id:desc'
        ).then((res) => res.json())

        const { attributes } = json.data[0]

        const pageData = mapData([attributes])

        setData(() => pageData[0])
      } catch (e) {
        setData(undefined)
      }
    }

    if (pageMounted.current === false) {
      getData()
    }

    return () => {
      pageMounted.current = true
    }
  }, [])

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Página não encontrada || Portifólio Dayane Santos'
    }

    if (data && !data.title) {
      document.title = 'Carregando... || Portifólio Dayane Santos'
    }
    if (data && data.title) {
      document.title = 'Portifólio Dayane Santos'
    }
  }, [data])

  if (data === undefined) {
    return <PageNotFound />
  }
  if (data && !data.title) {
    return <Loader />
  }

  const { menu, section, footer } = data
  const { links, logoImg, logoLink } = menu

  return (
    <>
      <Menu links={links} logoImg={logoImg} logoLink={logoLink} />
      {section.map((sec) => {
        const { title } = sec

        if (title === 'Inicio') {
          return <InitialSection {...sec} key={sec.title} />
        }
        if (title === 'Sobre mim') {
          return <About {...sec} key={sec.title} />
        }
        if (title === 'Projetos') {
          return <Projects {...sec} key={sec.title} />
        }
        if (title === 'Habilidades') {
          return <Skills {...sec} key={sec.title} />
        }
      })}
      <Footer text={footer} />
      <ScrollTop />
    </>
  )
}

export default Home

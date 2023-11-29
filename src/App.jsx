import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import GlobalStyle from './Styles/global-styles'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

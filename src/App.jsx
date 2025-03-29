import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/LoginAndSignup/Login'
import Signup from './pages/LoginAndSignup/Signup'
import Items from './pages/Items/Items'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

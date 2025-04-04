import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/LoginAndSignup/Login'
import Signup from './pages/LoginAndSignup/Signup'
import Items from './pages/Items/Items'
import ItemsDetail from './pages/ItemsDetail/ItemsDetail'
import AddItem from './pages/AddItem/AddItem'
import Privacy from './pages/Privacy/privacy’'
import Faq from './pages/Faq/Faq'
import NavVArLayout from './Layout/NavVArLayout'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<Faq />} />

          <Route element={<NavVArLayout />}>
            <Route path="/items" element={<Items />} />
            <Route path="/items/:productId" element={<ItemsDetail />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

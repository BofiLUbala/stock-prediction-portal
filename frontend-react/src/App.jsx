import './assets/css/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import AuthProvider from './components/AuthProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashBoard from './components/DashBoard/DashBoard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './components/PublicRoute'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
          <Route path='/dashboard' element={<PrivateRoute><DashBoard /></PrivateRoute>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

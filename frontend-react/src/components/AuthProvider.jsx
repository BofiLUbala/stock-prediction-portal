import { useState, createContext } from 'react'

// ✅ Create context
const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

  // ✅ Initialize correctly
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('accessToken'))
  )

  return (
    // ✅ MUST be AuthContext.Provider
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export { AuthContext }

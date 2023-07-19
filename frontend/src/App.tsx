import React from 'react'
import SignIn from './components/views/SignIn'
import { AuthContextProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './components/views/SignUp'

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  )
}

export default App

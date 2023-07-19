import React from 'react'
import SignIn from './components/views/SignIn'
import { AuthContextProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  )
}

export default App

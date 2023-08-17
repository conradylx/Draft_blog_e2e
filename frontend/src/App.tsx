import React from 'react'
import SignIn from './components/views/SignIn'
import { AuthContextProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './components/views/SignUp'
import Home from './components/views/Home/Home'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </AuthContextProvider>
  )
}

export default App

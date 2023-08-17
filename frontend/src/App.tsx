import React, { ReactNode } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/views/SignIn';
import { AuthContextProvider } from './contexts/AuthContext';
import SignUp from './components/views/SignUp';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/views/Home/Home';
import Navbar from './components/organisms/Navbar'

const queryClient = new QueryClient();

interface RouteGuardProps {
  children: ReactNode;
}

function RouteGuard({ children }: RouteGuardProps) {
  const { pathname } = window.location;

  const renderNavbar = pathname !== '/signin' && pathname !== '/signup';

  return (
    <>
      {renderNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <RouteGuard>
            <Routes>
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </RouteGuard>
        </Router>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;

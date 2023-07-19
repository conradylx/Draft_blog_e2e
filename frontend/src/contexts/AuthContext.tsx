import React, { createContext, ReactNode, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

interface ISignIn {
  username: string
  password: string
}
export interface IAuthContextProps {
  signIn: (payload: ISignIn) => void
  signOut: () => void
  error: boolean
}

interface IAuthContextProviderProps {
  children: ReactNode
}

const AuthContext = createContext<IAuthContextProps | null>(null);

const removeCookies = () => {
  Cookies.remove('access_token')
  Cookies.remove('refresh_token')
}

const AuthContextProvider: React.FC<IAuthContextProviderProps> = ({ children }) => {
  const [error, setError] = useState(false)
  const signIn = async (payload: ISignIn) => {
    return await axios.post(
      "http://localhost:8000/api/token/",
      payload
    ).then(r => {
      Cookies.set('access_token', r.data.access)
      Cookies.set('refresh_token', r.data.refresh)
    }).catch(error => {
      setError(true)
      removeCookies()
    })
  };

  const signOut = (): void => removeCookies()

  return (
    <AuthContext.Provider value={{ signIn, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

interface IPrivateRoute {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const cookie = Cookies.get('access_token') || ''
  // TODO: Add protection for accessing signin/signup pages while logged in

  return cookie ? (
    <>{children}</>
  ) : (
    <Navigate to='/signin' replace={true} />
  )
}

export default PrivateRoute

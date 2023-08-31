import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'

interface IPrivateRoute {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const cookie = Cookies.get('access_token') || ''
  return cookie && cookie.length > 0 ? (
    <>{children}</>
  ) : (
    <Navigate to="/signin" replace={true} />
  );
};

export default PrivateRoute;

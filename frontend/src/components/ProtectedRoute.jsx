import {Navigate, Outlet} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {

  const {isAuthenticated, loading} = useAuth();

  if(loading){
    return <div className='text-white text-center mt-10'>Loading...</div>
  }

  return isAuthenticated ? <Outlet/> : <Navigate to='/login' replace />;

};

export default ProtectedRoute;
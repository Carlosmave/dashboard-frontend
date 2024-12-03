import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

const ProtectedRoute = () => {
  const userAccessToken = useAppSelector(
    (state: RootState) => state.authentication.userAccessToken,
  );
  // redirect to login screen if no user is found in redux store
  if (!userAccessToken) {
    return <Navigate to="/login" replace />;
  } else {
    // returns child route elements
    return <Outlet />;
  }
};
export default ProtectedRoute;

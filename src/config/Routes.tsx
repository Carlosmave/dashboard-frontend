import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Register } from '../pages';
import ProtectedRoute from './ProtectedRoute';

export const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

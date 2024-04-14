import { Navigate, Outlet, Route, Routes as RoutesWrapper } from 'react-router-dom';
import { Login } from '../pages/Login';
import { UserManagement } from '../pages/UserManagement';
import { NewUser } from '../pages/UserManagement/NewUser';
import { UpdateUser } from '../pages/UserManagement/UpdateUser';
import { NotFound } from '../pages/NotFound';
import { Report } from '../pages/Report';
import { PrivateRoute, ProtectedRoutes } from './PrivateRoutes';
import { AccessProfile } from '../utils/enums/profile.enum';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';

export function Routes() {
  const SidebarLayout = () => (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );

  return (
    <RoutesWrapper>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route element={<SidebarLayout />}>
          <Route path="/home" element={<Home />} />

          <Route path="/users">
            <Route path="" element={<UserManagement />} />
            <Route
              path="new"
              element={<PrivateRoute profile_name={AccessProfile.ADMIN} element={<NewUser />} />}
            />
            <Route path="update" element={<UpdateUser />} />
          </Route>

          <Route
            path="/report"
            element={<PrivateRoute profile_name={AccessProfile.ADMIN} element={<Report />} />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </RoutesWrapper>
  );
}

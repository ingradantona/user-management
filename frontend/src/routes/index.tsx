import { Navigate, Route, Routes as RoutesWrapper } from 'react-router-dom';
import { Login } from '../pages/Login';
import { UserManagement } from '../pages/UserManagement';
import { NewUser } from '../pages/UserManagement/NewUser';
import { UpdateUser } from '../pages/UserManagement/UpdateUser';
import { NotFound } from '../pages/NotFound';
import { Report } from '../pages/Report';

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route element={'<ProtectedRoutes />'}>
        <Route element={'<SidebarLayout />'}>
          <Route path="/home" element={'<Home />'} />

          <Route path="/users">
            <Route path="" element={<UserManagement />} />
            <Route path="new" element={<NewUser />} />
            <Route path="update" element={<UpdateUser />} />
          </Route>

          <Route path="/report" element={<Report />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </RoutesWrapper>
  );
}

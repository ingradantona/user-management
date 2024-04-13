import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { getDecodedTokenLocalStorage, getTokenLocalStorage } from '../utils/hooks/useStorage';

type IPrivateRoute = {
  profile_name: AccessProfile.ADMIN | AccessProfile.COMMON;
};

type TPrivateRouteExtended = IPrivateRoute & RouteProps;

export function isAllowedProfile(profile_name?: string): boolean | undefined {
  if (!profile_name) {
    return true;
  }

  const decoded_access_token = getDecodedTokenLocalStorage();
  if (
    decoded_access_token?.profile_name === AccessProfile.ADMIN ||
    profile_name === decoded_access_token?.profile_name
  ) {
    return true;
  }

  return false;
}

export function PrivateRoute({ profile_name, element }: TPrivateRouteExtended) {
  if (isAllowedProfile(profile_name)) {
    if (element) {
      return <>{element}</>;
    } else {
      return <Outlet />;
    }
  } else {
    return <Navigate to="/home" />;
  }
}

export function ProtectedRoutes() {
  const decoded_access_token = getTokenLocalStorage();

  if (!decoded_access_token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export enum AccessProfile {
  COMMON = 'Analista',
  ADMIN = 'Administrador',
}

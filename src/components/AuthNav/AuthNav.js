import { AuthList, AuthListItem, AuthTitle } from './AuthNav.styled';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';

export const AuthNav = () => {
  return (
    <AuthList>
      <AuthListItem>
        <AuthTitle to="/register">
          Register
          <AppRegistrationIcon sx={{ marginLeft: '5px' }} />
        </AuthTitle>
      </AuthListItem>
      <AuthListItem>
        <AuthTitle to="/login">
          Log In
          <LoginIcon sx={{ marginLeft: '5px' }} />
        </AuthTitle>
      </AuthListItem>
    </AuthList>
  );
};

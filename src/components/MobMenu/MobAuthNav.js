import PropTypes from 'prop-types';
import { MobAuthList, MobAuthListItem, MobAuthTitle } from './MobMenu.styled';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';

export const MobAuthNav = ({ handleToggleShow }) => {
  return (
    <MobAuthList>
      <MobAuthListItem>
        <MobAuthTitle to="/register" onClick={handleToggleShow}>
          Register
          <AppRegistrationIcon sx={{ marginLeft: '5px', marginTop: '8px' }} />
        </MobAuthTitle>
      </MobAuthListItem>
      <MobAuthListItem>
        <MobAuthTitle to="/login" onClick={handleToggleShow}>
          Log In
          <LoginIcon sx={{ marginLeft: '5px', marginTop: '8px' }} />
        </MobAuthTitle>
      </MobAuthListItem>
    </MobAuthList>
  );
};

MobAuthNav.propTypes = {
  handleToggleShow: PropTypes.func.isRequired,
};

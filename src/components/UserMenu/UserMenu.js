import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations/userOperations';
import { selectAuth } from 'redux/selector';
import { UserMenuDiv, UserEmail, ButtonForLogOut } from './UserMenu.styled';
import { AvatarStyle } from 'components/icons/icons.styled';
import { LogoutIconStyle } from 'components/icons/icons.styled';
import { MobButtonForLogOut } from 'components/MobMenu/MobMenu.styled';

export const UserMenu = ({ handleToggleShow }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  const userMainLetter = user.email.slice(0, 1).toUpperCase();
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <UserMenuDiv>
      <AvatarStyle letter={userMainLetter} color={randomColor} />
      <UserEmail>{user.email}</UserEmail>
      <ButtonForLogOut type="button" onClick={() => dispatch(logOutUser())}>
        Log Out
        <LogoutIconStyle />
      </ButtonForLogOut>
      <MobButtonForLogOut
        type="button"
        onClick={() => {
          dispatch(logOutUser());
          handleToggleShow();
        }}
      >
        Log Out
        <LogoutIconStyle />
      </MobButtonForLogOut>
    </UserMenuDiv>
  );
};

UserMenu.propTypes = {
  handleToggleShow: PropTypes.func,
};

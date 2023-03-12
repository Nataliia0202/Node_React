import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { useState } from 'react';
import {
  MobMenuOpenButton,
  MobMenuWrap,
  MobMenuCloseButton,
} from './MobMenu.styled';
import MenuIcon from '@mui/icons-material/Menu';
import { MobAuthNav } from 'components/MobMenu/MobAuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import CloseIcon from '@mui/icons-material/Close';

export const MobMenu = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const [show, setShow] = useState(false);

  const handleToggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <MobMenuOpenButton onClick={handleToggleShow}>
        <MenuIcon sx={{ width: '36px', height: '40px' }} />
      </MobMenuOpenButton>
      {show && (
        <MobMenuWrap>
          {isLoggedIn ? (
            <UserMenu handleToggleShow={handleToggleShow} />
          ) : (
            <MobAuthNav handleToggleShow={handleToggleShow} />
          )}
          <MobMenuCloseButton onClick={handleToggleShow}>
            <CloseIcon sx={{ width: '36px', height: '40px' }} />
          </MobMenuCloseButton>
        </MobMenuWrap>
      )}
    </>
  );
};

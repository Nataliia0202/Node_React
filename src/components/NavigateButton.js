import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { NavButton } from 'components/GlobalStyles';


export const NavigateButton = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <NavButton to={isLoggedIn ? '/contacts' : '/register'}>
      Let`s go
      
    </NavButton>
  );
};

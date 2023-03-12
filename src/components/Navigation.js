import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { Box } from './Box';
import { AppBarList, AppBarItem, NavTitle } from './GlobalStyles';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <Box as="nav">
      <AppBarList>
        <AppBarItem>
          <NavTitle to="/" end>
            Home
          </NavTitle>
        </AppBarItem>
        {isLoggedIn === true && (
          <AppBarItem>
            <NavTitle to="/contacts">Contacts</NavTitle>
          </AppBarItem>
        )}
      </AppBarList>
    </Box>
  );
};

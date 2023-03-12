import { Box } from './Box';
import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { MobMenu } from './MobMenu/MobMenu';
import { UserAuthWrap } from './GlobalStyles';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <Box
      as="header"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
      maxWidth="1280px"
      mb={5}
      p={4}
      bg="#1E90FF"
      boxShadow="shadow"
    >
      <Navigation />
      <MobMenu />
      <UserAuthWrap>{isLoggedIn ? <UserMenu /> : <AuthNav />}</UserAuthWrap>
    </Box>
  );
};

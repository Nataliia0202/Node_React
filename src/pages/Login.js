import { Box } from 'components/Box';
import { SecondTitle } from 'components/GlobalStyles';
import { LoginForm } from 'components/LoginForm';
import { NavigateLink } from 'components/NavigateLink';

export const Login = () => {
  return (
    <Box as="section" mt={7}>
      <SecondTitle>If you have an account, please login!</SecondTitle>
      <LoginForm />
      <NavigateLink way={'/register'} text={'Or maybe wanna'} />
    </Box>
  );
};

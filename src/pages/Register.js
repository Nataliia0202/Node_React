import { Box } from 'components/Box';
import { SecondTitle } from 'components/GlobalStyles';
import { RegisterForm } from 'components/RegisterForm';
import { NavigateLink } from 'components/NavigateLink';

export const Register = () => {
  return (
    <Box as="section" mt={7}>
      <SecondTitle>If you are new, please register!</SecondTitle>
      <RegisterForm />
      <NavigateLink way={'/login'} text={'Or maybe wanna'} />
    </Box>
  );
};

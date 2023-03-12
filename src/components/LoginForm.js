import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations/userOperations';
import { ClassicFormStyle, ClassicButton } from 'components/GlobalStyles';
import { EmailField } from 'components/FormFields/EmailField';
import { PasswordField } from 'components/FormFields/PasswordField';
import { toastWarnEmptyField } from 'components/services/toasts';
import LoginIcon from '@mui/icons-material/Login';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmitLogIn = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
      return toastWarnEmptyField();
    }
    dispatch(
      logInUser({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <ClassicFormStyle onSubmit={handleSubmitLogIn} autoComplete="on">
      <EmailField />
      <PasswordField />
      <ClassicButton type="submit">
        Log In
        <LoginIcon sx={{ marginLeft: '5px' }} />
      </ClassicButton>
    </ClassicFormStyle>
  );
};

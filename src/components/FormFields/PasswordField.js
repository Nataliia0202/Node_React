import { useState } from 'react';
import { ClassicInputForm, ClassicLabelForm } from '../GlobalStyles';
import {
  VisibilityIconStyle,
  VisibilityOffIconStyle,
  ButtonForVisibility,
  KeyIconStyle,
} from '../icons/icons.styled';

export const PasswordField = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <ClassicLabelForm>
      Password
      <ClassicInputForm
        type={passwordShown ? 'text' : 'password'}
        name="password"
      />
      <KeyIconStyle />
      <ButtonForVisibility
        type="button"
        onClick={() => setPasswordShown(!passwordShown)}
      >
        {passwordShown ? <VisibilityOffIconStyle /> : <VisibilityIconStyle />}
      </ButtonForVisibility>
    </ClassicLabelForm>
  );
};

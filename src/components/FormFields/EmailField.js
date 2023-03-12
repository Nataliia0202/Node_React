import { ClassicInputForm, ClassicLabelForm } from '../GlobalStyles';
import { EmailIconStyle } from '../icons/icons.styled';

export const EmailField = () => {
  return (
    <ClassicLabelForm>
      Email
      <ClassicInputForm type="email" name="email" />
      <EmailIconStyle />
    </ClassicLabelForm>
  );
};

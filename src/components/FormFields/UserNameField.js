import { ClassicInputForm, ClassicLabelForm } from '../GlobalStyles';
import { PersonIconStyle } from '../icons/icons.styled';

export const UserNameField = () => {
  return (
    <ClassicLabelForm>
      Username
      <ClassicInputForm type="text" name="name" />
      <PersonIconStyle />
    </ClassicLabelForm>
  );
};

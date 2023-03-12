import styled from 'styled-components';
import { ClassicLabelForm, ClassicInputForm } from 'components/GlobalStyles';

export const LabelFilter = styled(ClassicLabelForm)`
  position: relative;
  display: block;
  width: 240px;
  margin: 0 auto;
  text-align: center;
  color: ${p => p.theme.colors.reallyBisque};
`;

export const InputFilter = styled(ClassicInputForm)`
  width: 200px;
  margin-right: auto;
  margin-left: auto;
`;

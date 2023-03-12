import styled from 'styled-components';
import { ClassicButton } from 'components/GlobalStyles';

export const ContactListStyle = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
`;

export const ContactListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

export const ContactNumber = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.clearlyWhite};
  cursor: pointer;
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover,
  &:focus {
    text-shadow: ${p => p.theme.shadows.shadowSecond};
  }
`;

export const ButtonForDelete = styled(ClassicButton)`
  padding: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[3]}px;
`;

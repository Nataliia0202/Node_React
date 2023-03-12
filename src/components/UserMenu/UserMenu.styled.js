import styled from 'styled-components';
import { device, ClassicButton } from 'components/GlobalStyles';

export const UserMenuDiv = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileOnly} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const UserEmail = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.reallyBisque};
  margin-right: ${p => p.theme.space[4]}px;
  cursor: pointer;
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover,
  &:focus {
    text-shadow: ${p => p.theme.shadows.shadowSecond};
  }
  @media ${device.mobileOnly} {
    margin-top: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const ButtonForLogOut = styled(ClassicButton)`
  display: none;
  @media ${device.tablet} {
    display: flex;
    color: ${p => p.theme.colors.almostDarkGreen};
    background-color: ${p => p.theme.colors.almostWhite};
  }
`;

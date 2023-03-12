import styled from 'styled-components';
import { device, ClassicButton } from 'components/GlobalStyles';
import { AuthListItem, AuthTitle } from 'components/AuthNav/AuthNav.styled';

export const MobMenuWrap = styled.div`
  position: fixed;
  background-color: ${p => p.theme.colors.almostDarkGreen};
  background-image: linear-gradient(
    335deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(94, 94, 98, 0.5) 100%
  );
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  top: 0;
  left: 0;
  padding-top: 88px;
  padding-bottom: 58px;
`;

export const MobMenuOpenButton = styled(ClassicButton)`
  display: none;
  @media ${device.mobileOnly} {
    display: block;
    padding: 0;
    margin-top: ${p => p.theme.space[1]}px;
    height: 40px;
    color: ${p => p.theme.colors.clearlyWhite};
  }
`;

export const MobMenuCloseButton = styled(ClassicButton)`
  padding: 0;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 19px;
  color: ${p => p.theme.colors.clearlyWhite};
  background-color: transparent;
  outline: ${p => p.theme.borders.none};
  border: ${p => p.theme.borders.none};
`;

export const MobAuthList = styled.ul`
  width: 400px;
  height: 100%;
  margin: 0 auto;
`;

export const MobAuthListItem = styled(AuthListItem)`
  &:not(:last-child) {
    @media ${device.mobileOnly} {
      margin-bottom: ${p => p.theme.space[4]}px;
    }
  }
`;

export const MobAuthTitle = styled(AuthTitle)`
  align-items: center;
  font-weight: ${p => p.theme.fontWeights.large};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const MobButtonForLogOut = styled(ClassicButton)`
  display: none;
  @media ${device.mobileOnly} {
    display: flex;
    color: ${p => p.theme.colors.almostDarkGreen};
    background-color: ${p => p.theme.colors.almostWhite};
  }
`;

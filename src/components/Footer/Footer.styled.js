import styled from 'styled-components';

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1280px;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.almostDarkGreen};
`;

export const FooterTitle = styled.p`
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

export const FooterLink = styled.a`
  fill: ${p => p.theme.colors.reallyBisgue};
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover,
  &:focus {
    transform: ${p => p.theme.transform.scaleThird};
  }
`;

export const FooterOwner = styled.span`
  color: ${p => p.theme.colors.reallyBisque};
`;

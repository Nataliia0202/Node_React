import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const AuthListItem = styled.li`
  cursor: pointer;
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover {
    transform: ${p => p.theme.transform.scaleThird};
    text-shadow: ${p => p.theme.shadows.shadowSecond};
  }
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const AuthTitle = styled(NavLink)`
  display: flex;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.clearlyWhite};
  &.active {
    color: ${p => p.theme.colors.reallyBisque};
  }
`;

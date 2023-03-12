import { SecondTitle } from 'components/GlobalStyles';
import { NavToLink } from './GlobalStyles';

export const NavigateLink = ({ way, text }) => {
  const word = way.slice(1, way.length);

  return (
    <SecondTitle style={{ marginTop: '8px' }}>
      {text} <NavToLink to={way}>{word}</NavToLink>?
    </SecondTitle>
  );
};

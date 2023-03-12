import { MainWrap, MainTitle, SecondTitle } from 'components/GlobalStyles';
import { NavigateButton } from 'components/NavigateButton';

export const Home = () => {
  return (
    <MainWrap>
      <MainTitle>Hello there! </MainTitle>
      <img
        src="https://i.gifer.com/WS2k.gif"
        alt="Obi-Wan Kenobi"
        width="280"
        height="160"
        style={{ margin: '0 auto' }}
      />
      
      <SecondTitle>Ready to work? </SecondTitle>
      <NavigateButton />
    </MainWrap>
  );
};

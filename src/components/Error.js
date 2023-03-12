import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { ErrorSection } from './GlobalStyles';
import { NavButton } from './GlobalStyles';
import ReplyIcon from '@mui/icons-material/Reply';

export const Error = ({ errorImg, children }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <ErrorSection>
      <img
        src={errorImg}
        alt="Wow dude, try one more time"
        width="1000px"
        heigth="700px"
      />
      {children}
      <NavButton to={isLoggedIn ? '/contacts' : '/'}>
        Go back
        <ReplyIcon sx={{ marginLeft: '5px' }} />
      </NavButton>
    </ErrorSection>
  );
};

Error.propTypes = {
  errorImg: PropTypes.string.isRequired,
};

import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FooterLink } from 'components/Footer/Footer.styled';

const iconStyle = {
  position: 'absolute',
  top: '35px',
  left: '8px',
  fill: '#00008B',
  /* transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1), */
};

export const EmailIconStyle = () => <EmailIcon sx={{ ...iconStyle }} />;

export const KeyIconStyle = () => <KeyIcon sx={{ ...iconStyle }} />;

export const PersonIconStyle = () => <PersonIcon sx={{ ...iconStyle }} />;

export const LocalPhoneIconStyle = () => (
  <LocalPhoneIcon sx={{ ...iconStyle }} />
);

export const SearchIconStyle = () => <SearchIcon sx={{ ...iconStyle }} />;

export const VisibilityIconStyle = () => <VisibilityIcon sx={{ fill: '#00008B' }} />;

export const VisibilityOffIconStyle = () => (
  <VisibilityOffIcon sx={{ fill: '#00008B' }} />
);

export const AvatarStyle = ({ letter, color }) => (
  <Avatar
    sx={{
      width: '38px',
      height: '38px',
      marginRight: '10px',
      bgcolor: color,
      cursor: 'pointer',
    }}
  >
    {letter}
  </Avatar>
);

export const LogoutIconStyle = () => <LogoutIcon sx={{ marginLeft: '5px' }} />;

export const GitHubIconStyle = () => (
  <FooterLink
    href="https://github.com/Nataliia0202"
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    <GitHubIcon
      sx={{
        width: '33px',
        height: '33px',
        fill: '#fff',
      }}
    />
  </FooterLink>
);

export const LinkedInIconStyle = () => (
  <FooterLink
    href="https://www.linkedin.com/in/nataliia-svystula"
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    <LinkedInIcon
      sx={{
        width: '39px',
        height: '39px',
        fill: '#fff',
      }}
    />
  </FooterLink>
);

export const ButtonForVisibility = styled.button`
  position: absolute;
  top: 33px;
  right: 8px;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`;

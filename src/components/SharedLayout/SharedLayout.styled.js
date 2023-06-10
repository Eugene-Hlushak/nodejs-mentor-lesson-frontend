import { styled } from '@mui/material/styles';
import { Button, AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)({
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: 500,
  color: 'black',

  '&.active': {
    color: '#faa41bf8',
  },
});

export const AppHeader = styled(AppBar)({
  backgroundColor: '#3fb400',
});

export const LinkBox = styled('div')({
  display: 'flex',

  alignItems: 'center',
});

export const User = styled('p')({
  marginRight: '10px',
});

export const LogoutBtn = styled(Button)({
  backgroundColor: '#faa41bf8',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#7c8848',
  },
});

import { Outlet } from 'react-router-dom/dist';
import { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from 'redux/auth/authOperations';
import {
  Link,
  LinkBox,
  LogoutBtn,
  AppHeader,
  User,
} from './SharedLayout.styled';
import { selectUserIsLoggedin, selectUser } from 'redux/auth/authSelectors';
import { Box, Toolbar, Typography } from '@mui/material';
import { MainContainer } from 'components/GlobalStyle';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userLoggedIn = useSelector(selectUserIsLoggedin);

  return (
    <>
      <AppHeader position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            Phonebook
          </Typography>
          <Box>
            {!userLoggedIn ? (
              <LinkBox>
                <Link to="/" sx={{ mr: '10px' }}>
                  Login
                </Link>
                <Link to="/register">Register</Link>
              </LinkBox>
            ) : (
              <LinkBox>
                {user.name && <User>Welcome, {user.name}</User>}
                <Link to="/contacts" sx={{ mr: '10px' }}>
                  Contacts
                </Link>
                <LogoutBtn
                  variant="outlined"
                  type="submit"
                  onClick={() => {
                    dispatch(userLogout());
                  }}
                >
                  Logout
                </LogoutBtn>
              </LinkBox>
            )}
          </Box>
        </Toolbar>
      </AppHeader>
      <MainContainer>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};
export default SharedLayout;

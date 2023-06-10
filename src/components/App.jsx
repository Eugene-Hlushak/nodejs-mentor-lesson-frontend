import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Register from 'pages/Register';
import { Routes, Route } from 'react-router-dom';
import { userRefresh } from 'redux/auth/authOperations';
import { selectIsRefresh } from 'redux/auth/authSelectors';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    !refresh && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    )
  );
};

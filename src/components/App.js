import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { clearAuthHeader, refreshUser } from 'redux/operations/userOperations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { GlobalStyle } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from 'components/images/404-Error-Websites.jpg';
import { Error } from './Error';


const Contacts = lazy(() =>
  import('../pages/Contacts').then(module => ({
    ...module,
    default: module.Contacts,
  }))
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshUser());

    return () => {
      clearAuthHeader();
    };
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route path="*" element={<Error errorImg={img} />} />
          </Route>
        </Routes>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </>
    )
  );
};

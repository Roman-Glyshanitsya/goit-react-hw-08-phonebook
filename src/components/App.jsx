import { Container } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Container>
  );
};
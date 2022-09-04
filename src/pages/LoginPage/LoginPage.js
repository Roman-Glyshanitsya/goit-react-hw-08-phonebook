import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/authOperations';
import { Form, Label } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login Page</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Label>

        <button type="submit">LogIn</button>
      </Form>
    </div>
  );
};

export default LoginPage;

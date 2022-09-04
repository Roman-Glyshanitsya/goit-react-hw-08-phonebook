import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { Input } from 'components/ContactForm/ContactForm.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Input
          label="Name"
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name Surname"
          required
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="at least 8 chars, numbers and letters"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;

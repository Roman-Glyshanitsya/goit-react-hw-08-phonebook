import { Input } from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const error = useSelector(getUserError);
  //   const location = useLocation().pathname;
  const dispatch = useDispatch();

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
          //   variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name Surname"
          required
        />

        <Input
          label="Email"
          //   variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          required
        />

        <Input
          label="Password"
          //   variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="at least 8 chars, numbers and letters"
          required
        />
        <button type="submit">Register</button>
        {/* <div className={styles.errorContainer}>
          {error && (
            <p className={styles.error}>
              {location === '/login'
                ? ' Incorrect email or password'
                : 'This email is alredy used'}
            </p>
          )}
        </div> */}
      </form>
    </div>
  );
};

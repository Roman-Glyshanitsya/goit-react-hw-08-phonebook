import { useSelector } from 'react-redux';
import { Link } from './AuthNav.styled';
import { authSelectors } from 'redux/auth';

export const UserNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

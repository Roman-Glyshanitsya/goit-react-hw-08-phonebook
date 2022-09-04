import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <p>
        <span>Phone</span>book
      </p>
      {isLoggedIn ? <Navigation /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
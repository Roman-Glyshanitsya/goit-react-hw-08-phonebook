import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <button>
        <NavLink to="/register">
          {' '}
          REGISTER
        </NavLink>
      </button>
      <button>
        <NavLink to="/login">
          {' '}
          LOG IN
        </NavLink>
      </button>
    </div>
  );
};

export default AuthNav;
import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="contacts">
          CONTACTS
        </NavLink>
      </nav>
      <UserMenu />
    </>
  );
};

export default Navigation;

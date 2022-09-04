import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import operations from 'redux/auth/authOperations';
// import { Box, Name } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;

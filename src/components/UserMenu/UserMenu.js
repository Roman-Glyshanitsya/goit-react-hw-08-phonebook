import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import operations from 'redux/auth/authOperations';
import { Box, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Box>
      <Name>Welcome, {name}</Name>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Log Out
      </button>
    </Box>
  );
};

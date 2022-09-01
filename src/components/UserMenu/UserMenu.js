import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Box, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Box>
      <Name>Welcome, {name}</Name>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </Box>
  );
};

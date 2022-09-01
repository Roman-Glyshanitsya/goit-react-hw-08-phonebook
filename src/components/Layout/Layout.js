import { Container, Header, Logo } from './Layout.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { UserNav } from 'components/Navigation/UserNav';
import { AuthNav } from 'components/Navigation/AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="phone icon"></span>
          Phonebook
        </Logo>
        <UserNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
};

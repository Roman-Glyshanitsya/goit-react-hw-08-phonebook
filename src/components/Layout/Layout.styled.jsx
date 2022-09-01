import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid gray;
  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-size: 30px;
  font-weight: 900;
  color: black;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
`;
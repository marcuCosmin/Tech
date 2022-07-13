import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: end;
  padding: 2rem;
  font-size: 150%;
`;

const NavItem = styled.div`
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

export { Nav, NavItem };

import React from 'react';

import { Nav, NavItem } from '../../styles/Header.styled';

import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { update } from '../../redux/slices/email';
import { updateCookie } from '../../services/functions';

export default function Header() {
  const dispatch = useDispatch();

  if (!useSelector((state: RootState) => state.email).length) return null;
  return (
    <Nav>
      <NavItem
        onClick={() => {
          updateCookie('email', 'email', true);
          dispatch(update.update(''));
        }}
      >
        Log out
      </NavItem>
    </Nav>
  );
}

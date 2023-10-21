import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './Layout.styles';

const Layout = () => {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
};

export default Layout;

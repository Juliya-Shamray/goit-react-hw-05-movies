import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { StyledMain } from './Layout.styled';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};

export default Layout;

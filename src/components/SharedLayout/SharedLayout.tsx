import { FC, Suspense } from 'react';
import { Main } from './SharedLayout.styled';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PagePaths } from '@/constants';

const SharedLayout: FC = () => {
  const { pathname } = useLocation();

  const isRootPage = pathname === PagePaths.root;

  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer isRootPage={isRootPage} />
    </>
  );
};

export default SharedLayout;

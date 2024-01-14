import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './loader/Loader';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;

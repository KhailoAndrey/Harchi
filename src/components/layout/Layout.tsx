import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './loader/Loader';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ToTopButton from '@/helpers/scrollBtn/ToTopBtn';

function Layout() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
      <ToTopButton />
    </>
  );
}

export default Layout;

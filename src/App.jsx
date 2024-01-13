import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

const Layout = lazy(() => import('./components/layout/Layout'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

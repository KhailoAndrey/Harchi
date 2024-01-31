import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./components/layout/Layout'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const RecipePage = lazy(() => import('./pages/RecipePage/RecipePage'));
const ExpertsPage = lazy(() => import('./pages/ExpertsPage/ExpertsPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="recipes" element={<RecipePage />} />
          <Route path="experts" element={<ExpertsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./components/layout/Layout'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const RecipePage = lazy(() => import('./pages/RecipePage/RecipePage'));
const ExpertsPage = lazy(() => import('./pages/ExpertsPage/ExpertsPage'));
const ExpertProfile = lazy(() => import('./pages/ExpertProfile/ExpertProfile'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="all_recipes" element={<RecipePage />} />
          <Route path="experts" element={<ExpertsPage />} />
          <Route path="experts/:expertId" element={<ExpertProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

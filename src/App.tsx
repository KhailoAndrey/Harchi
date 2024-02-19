import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./components/layout/Layout'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const RecipePage = lazy(() => import('./pages/RecipePage/RecipePage'));
const RecipeCategoryPage = lazy(
  () => import('./pages/RecipeCategoryPage/RecipeCategoryPage')
);
const ExpertsPage = lazy(() => import('./pages/ExpertsPage/ExpertsPage'));
const ExpertProfile = lazy(() => import('./pages/ExpertProfile/ExpertProfile'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="all_recipes" element={<RecipePage />} />
        <Route
          path="all_recipes/:categoryName"
          element={<RecipeCategoryPage />}
        />
        <Route path="experts" element={<ExpertsPage />} />
        <Route path="experts/:expertId" element={<ExpertProfile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

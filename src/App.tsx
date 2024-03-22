import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Cookbook from './components/cookbook/Cookbook';

const Layout = lazy(() => import('./components/layout/Layout'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const RecipePage = lazy(() => import('./pages/RecipePage/RecipePage'));
const RecipeCategoryPage = lazy(
  () => import('./pages/RecipeCategoryPage/RecipeCategoryPage')
);
const ExpertsPage = lazy(() => import('./pages/ExpertsPage/ExpertsPage'));
const ExpertProfilePage = lazy(() => import('./pages/ExpertProfilePage/ExpertProfilePage'));
const ExpertEditPage = lazy(() => import('./pages/ExpertEditPage/ExpertEditPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MyCookbookPage = lazy(() => import('./pages/MyCookbook/MyCookbook'));

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<MainPage />} />
          <Route path="all_recipes" element={<RecipePage />} />
          <Route path="all_recipes/:categoryName" element={<RecipeCategoryPage />} />
          <Route path="experts" element={<ExpertsPage />} />
          <Route path="experts/:expertId" element={<ExpertProfilePage />} />
          <Route path="experts/edit" element={<ExpertEditPage />} />
          <Route path="cookbook" element={<MyCookbookPage />}>
            <Route path=":section" element={<Cookbook />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;

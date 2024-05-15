import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TagsPage from '../pages/TagsPage';
import ResultPage from '../pages/ResultPage';
import NavLayout from '../pages/NavLayout';

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="home/result/:query" element={<ResultPage />} />
          <Route path="tags" element={<TagsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;

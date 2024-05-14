import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TagsPage from '../pages/TagsPage';
import ResultPage from '../pages/ResultPage';

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tags" element={<TagsPage />} />
        <Route path="result/:query" element={<ResultPage />} />
        <Route
          path="*"
          element={
            <Navigate to="/" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;

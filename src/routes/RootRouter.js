import {
  createBrowserRouter, Navigate,
} from 'react-router-dom';
import NavLayout from 'pages/NavLayout';
import HomePage from 'pages/HomePage';
import ResultPage from 'pages/ResultPage';
import TagsPage from 'pages/TagsPage';

const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: 'home', element: <HomePage /> },
      { path: 'home/result/:query', element: <ResultPage /> },
      { path: 'tags', element: <TagsPage /> },
    ],
  },
]);

export default rootRouter;

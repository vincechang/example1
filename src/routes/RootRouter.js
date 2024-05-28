import {
  createBrowserRouter, Navigate,
} from 'react-router-dom';
import NavLayout from 'pages/NavLayout';
import HomePage from 'pages/HomePage';
import TagsPage from 'pages/TagsPage';
import { ResultPanel, SearchPanel } from 'components/Panels';
import { homeLoader, resultLoader } from 'api';

const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      {
        path: 'home',
        element: <HomePage />,
        loader: homeLoader,
        children: [
          { index: true, element: <SearchPanel /> },
          { path: 'result', element: <ResultPanel />, loader: resultLoader },
        ],
      },
      { path: 'tags', element: <TagsPage /> },
    ],
  },
]);

export default rootRouter;

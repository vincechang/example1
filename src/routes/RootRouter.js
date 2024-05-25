import {
  createBrowserRouter, defer, Navigate,
} from 'react-router-dom';
import NavLayout from 'pages/NavLayout';
import HomePage from 'pages/HomePage';
import ResultPage from 'pages/ResultPage';
import TagsPage from 'pages/TagsPage';
import fetcher, { getFollowersApi, getFollowingApi } from 'api';

const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      {
        path: 'home',
        element: <HomePage />,
        loader: async () => {
          const followersFetcher = fetcher(getFollowersApi());
          const followingFetcher = fetcher(getFollowingApi());
          return defer({ followersFetcher, followingFetcher });
        },
      },
      { path: 'home/result/:query', element: <ResultPage /> },
      { path: 'tags', element: <TagsPage /> },
    ],
  },
]);

export default rootRouter;

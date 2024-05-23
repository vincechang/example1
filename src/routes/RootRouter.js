import {
  createBrowserRouter, defer, Navigate,
} from 'react-router-dom';
import axios from 'axios';
import NavLayout from 'pages/NavLayout';
import HomePage from 'pages/HomePage';
import ResultPage from 'pages/ResultPage';
import TagsPage from 'pages/TagsPage';

const fetcher = (url) => axios.get(url).then((res) => res.data);

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
          const followers = await fetcher('https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10');
          const following = await fetcher('https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10');
          return defer({ followers, following });
        },
      },
      { path: 'home/result/:query', element: <ResultPage /> },
      { path: 'tags', element: <TagsPage /> },
    ],
  },
]);

export default rootRouter;

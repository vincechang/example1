import axios from 'axios';
import { defer } from 'react-router-dom';
import { store } from 'store';

export const getFollowersApi = (page = 1, pageSize = 10) => `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}`;

export const getFollowingApi = (page = 1, pageSize = 10) => `https://avl-frontend-exam.herokuapp.com/api/users/friends?page=${page}&pageSize=${pageSize}`;

export const getSearchApi = (keyword = '', page = 1, pageSize = 10) => `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;

export const getTagsApi = () => 'https://avl-frontend-exam.herokuapp.com/api/tags';

const fetcher = (url) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(axios.get(url).then((res) => res.data));
  }, 1500);
});

export const homeLoader = async () => {
  const followersFetcher = fetcher(getFollowersApi());
  const followingFetcher = fetcher(getFollowingApi());
  return defer({ followersFetcher, followingFetcher });
};

export const resultLoader = async () => {
  const { keyword, pageSize } = store.getState();
  const searchFetcher = fetcher(getSearchApi(keyword, 1, pageSize));
  return defer({ searchFetcher });
};

export const tagsLoader = async () => {
  const tagsFetcher = fetcher(getTagsApi());
  return defer({ tagsFetcher });
};

export default fetcher;

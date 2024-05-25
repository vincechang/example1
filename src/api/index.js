import axios from 'axios';

export const getFollowersApi = (page = 1, pageSize = 10) => `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}`;

export const getFollowingApi = (page = 1, pageSize = 10) => `https://avl-frontend-exam.herokuapp.com/api/users/friends?page=${page}&pageSize=${pageSize}`;

const fetcher = (url) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(axios.get(url).then((res) => res.data));
  }, 1500);
});

export default fetcher;

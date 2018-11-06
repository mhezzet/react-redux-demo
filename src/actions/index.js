import axios from 'axios';

const URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPECLIP12345';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';

export const fetchPosts = async () => {
  const response = await axios.get(`${URL}/posts${API_KEY}`);

  return { type: FETCH_POSTS, payload: response };
};

export const createPost = async (values, callback) => {
  const response = await axios.post(`${URL}/posts${API_KEY}`, values);
  if (response) callback();
  return {
    type: CREATE_POST,
    payload: response
  };
};

export const fetchPost = async id => {
  const response = await axios.get(`${URL}/posts/${id}${API_KEY}`);

  return { type: FETCH_POST, payload: response };
};

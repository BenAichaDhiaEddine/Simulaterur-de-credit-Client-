import axios from 'axios';
import Cookies from 'js-cookie';

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3009/v1'
    : process.env.REACT_APP_BACKEND_URI;

const Client = axios.create({
  baseURL
});

const config = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

// POST action
const post = async (url, data) => {
  try {
    const token = Cookies.get('S_A_TOKEN');
    let response;
    if (token)
      response = await Client.post(url, data, config(token));
    else
      response = await Client.post(url, data);

    return response.data;
  } catch (err) {
    console.error({ err });
    if (err.response.status === 401) {
      Cookies.remove('S_A_TOKEN');
      window.location.href = '/login';
    }
    throw err.response.data;
  }
};

// GET action
const get = async url => {
  try {
    const token = Cookies.get('S_A_TOKEN');
    let response;
    if (token)
      response = await Client.get(url, config(token));
    else
      response = await Client.get(url, config(token));
    return response.data;
  } catch (err) {
    console.error({ err });
    if (err.response.status === 401) {
      Cookies.remove('S_A_TOKEN');
      window.location.href = '/login';
    }
    throw err.response.data;
  }
};

// PATCH action
const patch = async (url, data) => {
  try {
    const token = Cookies.get('S_A_TOKEN');
    let response;
    if (token)
      response = await Client.patch(url, data, config(token));
    else
      response = await Client.patch(url, data);
    return response.data;
  } catch (err) {
    console.error({ err });
    if (err.response.status === 401) {
      Cookies.remove('S_A_TOKEN');
      window.location.href = '/login';
    }
    throw err.response.data;
  }
};
const update = async (url, data) => {
  try {
    const token = Cookies.get('S_A_TOKEN');
    let response;
    if (token)
      response = await Client.put(url, data, config(token));
    else 
      response = await Client.put(url, data);
    return response.data;
  } catch (err) {
    console.error({ err });
    if (err.response.status === 401) {
      Cookies.remove('S_A_TOKEN');
      //window.location.href = '/login';
    }
    throw err.response.data;
  }
};

// DELETE action
const remove = async url => {
  try {
    const token = Cookies.get('S_A_TOKEN');
    let response;
    if (token)
      response = await Client.delete(url, config(token));
    else 
      response = await Client.delete(url);
    return response.data;
  } catch (err) {
    console.error({ err });
    if (err.response.status === 401) {
      Cookies.remove('S_A_TOKEN');
      window.location.href = '/login';
    }
    throw err.response.data;
  }
};

export { get, post, remove, patch, update };

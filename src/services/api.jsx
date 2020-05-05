import fetch from 'isomorphic-fetch';

const url = "https://jsonplaceholder.typicode.com";

export const getPosts = async (path) => {
  const response = await fetch(url+path);
  if(response.ok) {
    const items = await response.json();
    return { items }
  } else {
    console.warn(Promise.reject(response));
    const msg = {
      error: true,
      status: response.status
    };
    return msg;
  }
}

export const getPostDetails = async (path) => {
  const response = await fetch(url+path);
  if(response.ok) {
    const post = await response.json();
    return { post };
  } else {
    console.warn(Promise.reject(response));
    const msg = {
      error: true,
      status: response.status
    };
    return msg;
  }
}
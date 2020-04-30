const url = "https://jsonplaceholder.typicode.com";

export const getAPI = async (path) => {
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
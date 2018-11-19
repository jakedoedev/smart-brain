import axios from 'axios';

const client = (token = null) => {

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json'
      // Authorization: token ? `Token ${token}` : '',
    },
  };

  if (token) {
    // defaultOptions.headers['Authorization'] = 'Bearer ' + token
    defaultOptions.headers['Authorization'] = token;
  }

  return {
    get: (url, options = {}) => {
      // console.log({ ...defaultOptions, ...options });
      return axios.get(url, { ...defaultOptions, ...options })
    },
    post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
  };
};

export default client;

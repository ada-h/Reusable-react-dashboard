import axios from 'axios';

const host = `https://boiler.xend-utils.xyz/api`;

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const call = async (method, path, data) => {
  const response =  await axios[method](`${host}/${path}`, data)
                  .then(response => {
                    console.log('myResponse', response)
                    return response.data
                  })
                  .catch(error => {
                    console.log('myError', error.response)
                    return error.response.data
                  })
                  return response
};

export default { setToken, call };

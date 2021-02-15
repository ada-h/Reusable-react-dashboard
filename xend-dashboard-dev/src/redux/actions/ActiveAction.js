import {
    CHANGE_ACTIVE,
    SET_CURRENT_USER
} from './types'
import { addError, removeError } from './error';
import API from '../api';

export const changeActive = (id) => {
    return{
        type: CHANGE_ACTIVE,
        id
    }
}

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user,
  });
  
  export const setToken = token => {
    API.setToken(token);
  };
  
  export const logout = () => {
    return dispatch => {
      localStorage.clear();
      API.setToken(null);
      dispatch(setCurrentUser({}));
      dispatch(removeError());
    };
  };
  
  export const authUser = (path, datar) => {
    return async dispatch => {
      try {
         await API.call('post', `auth/${path}`, datar)
        .then(response => {
            console.log('ururur', response)
            if(response.status_code === 200) {
                const { access_token, ...user } = response.data
                localStorage.setItem('jwtToken', access_token);
                API.setToken(access_token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
            }
            if(response.status_code === 400){
                const  error  = response
                console.log(response)
                dispatch(addError(error));
            }
        })
       
      } catch (err) {
          console.log('action', err)
        const { error } = err.response;
        dispatch(addError(error));
      }
    };
  };
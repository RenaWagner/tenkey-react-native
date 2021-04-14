import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL_STYLE = `https://tenkeyapp.herokuapp.com`;

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(userLoading());
    try {
      const response = await axios.post(`${API_URL_STYLE}/login`, {
        email,
        password,
      });
      const token = response.data.token;
      try {
        await AsyncStorage.setItem('jwt', token);
        dispatch(loginSuccess(response.data, token));
      } catch (e) {
        console.log(e);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const userLoading = () => ({
  type: 'user/loading',
});

export const loginSuccess = (data, token) => ({
  type: 'user/login',
  payload: {data, token},
});

export const signup = (
  firstName,
  lastName,
  email,
  password,
  type,
  sensitiveness,
) => {
  return async (dispatch, getState) => {
    dispatch(userLoading());
    try {
      const response = await axios.post(`${API_URL_STYLE}/signup`, {
        firstName,
        lastName,
        email,
        password,
        clothingType: type,
        sensitiveness,
      });
      console.log(response.data);
      const token = response.data.token;
      try {
        await AsyncStorage.setItem('jwt', token);
        dispatch(loginSuccess(response.data, token));
      } catch (e) {
        console.log(e);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const logout = async (dispatch, getState) => {
  try {
    await AsyncStorage.removeItem('jwt');
    dispatch(logoutSuccess());
  } catch (e) {
    console.log(e);
  }
};

export const logoutSuccess = () => ({
  type: 'user/logout',
});

export const bootstrapLoginState = () => async (dispatch, getState) => {
  const token = await AsyncStorage.getItem('jwt');

  if (token) {
    const profile = await getProfile(token);
    if (profile) {
      dispatch(loginSuccess(profile, token));
    }
  }
};

const getProfile = async token => {
  try {
    const response = await axios.get(`${API_URL_STYLE}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = data => {
  return async (dispatch, getState) => {
    dispatch(userLoading());
    try {
      const {type, sensitiveness} = data;
      const jwt = getState().user.token;
      const response = await axios.patch(
        `${API_URL_STYLE}/user/profile`,
        {
          clothingType: type,
          sensitiveness: sensitiveness,
        },
        {
          headers: {Authorization: `Bearer ${jwt}`},
        },
      );
      console.log(response.data);
      dispatch(updatedProfile(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const updatedProfile = data => ({
  type: 'user/updateProfile',
  payload: data,
});

export const getAllUserStyles = () => {
  return async (dispatch, getState) => {
    dispatch(userLoading());
    const jwt = getState().user.token;
    try {
      const response = await axios.get(`${API_URL_STYLE}/user/original/`, {
        headers: {Authorization: `Bearer ${jwt}`},
      });
      dispatch(fetchedAllUserData(response.data));
      //console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const fetchedAllUserData = data => ({
  type: 'user/allStyles',
  payload: data,
});

export const deleteStyles = id => {
  return async (dispatch, getState) => {
    const jwt = getState().user.token;
    try {
      // eslint-disable-next-line
      const response = await axios.delete(
        `${API_URL_STYLE}/user/original/${id}`,
        {
          headers: {Authorization: `Bearer ${jwt}`},
        },
      );
      dispatch(deletingStyle(id));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const deletingStyle = id => ({
  type: 'user/deleteStyle',
  payload: id,
});

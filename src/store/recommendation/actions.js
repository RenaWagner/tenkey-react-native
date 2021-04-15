import axios from 'axios';
import {Dispatch} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {ReduxState} from '..';

const API_URL_STYLE = `https://tenkeyapp.herokuapp.com`;

export const recommendationLoading = () => ({
  type: 'recommendation/loading',
});

export const fetchUserStyle = temp => {
  return async (dispatch, getState) => {
    dispatch(recommendationLoading());
    try {
      const jwt = getState().user.token;
      const response = await axios.get(
        `${API_URL_STYLE}/user/original/${temp}`,
        {
          headers: {Authorization: `Bearer ${jwt}`},
        },
      );
      dispatch(fetchedUserStyles(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchedUserStyles = data => ({
  type: 'recommendation/fetchedUserStyles',
  payload: data,
});

export const fetchPublicStyleRating = temp => {
  return async (dispatch, getState) => {
    dispatch(recommendationLoading());
    try {
      const jwt = getState().user.token;
      const response = await axios.get(`${API_URL_STYLE}/user/public/${temp}`, {
        headers: {Authorization: `Bearer ${jwt}`},
      });
      dispatch(fetchedPublicStyleUserRating(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchedPublicStyleUserRating = data => ({
  type: 'recommendation/fetchedPubliStyleRating',
  payload: data,
});

export const updateRatingUserStyle = (id, rating) => {
  return async (dispatch, getState) => {
    dispatch(recommendationLoading());
    try {
      const jwt = getState().user.token;
      console.log(jwt);
      const response = await axios.patch(
        `${API_URL_STYLE}/user/original/${id}`,
        {
          rating: rating,
        },
        {
          headers: {Authorization: `Bearer ${jwt}`},
        },
      );
      dispatch(updatedUserSytle(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage('danger', true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage('danger', true, error.message));
      }
    }
  };
};

export const updatedUserSytle = data => ({
  type: 'recommendation/updatedUserSytle',
  payload: data,
});

export const updateCommentUserStyle = (id, comment) => {
  return async (dispatch, getState) => {
    dispatch(recommendationLoading());
    try {
      const jwt = getState().user.token;
      const response = await axios.patch(
        `${API_URL_STYLE}/user/original/${id}`,
        {
          comment: comment,
        },
        {
          headers: {Authorization: `Bearer ${jwt}`},
        },
      );
      dispatch(updatedUserSytle(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage('danger', true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage('danger', true, error.message));
      }
    }
  };
};

export const updateRatingPublicStyle = (publicstyleId, rating) => {
  return async (dispatch, getState) => {
    dispatch(recommendationLoading());
    try {
      const jwt = getState().user.token;
      const response = await axios.patch(
        `${API_URL_STYLE}/user/public/${publicstyleId}`,
        {
          rating: rating,
        },
        {
          headers: {Authorization: `Bearer ${jwt}`},
        },
      );
      dispatch(updatePublicStyle(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage('danger', true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage('danger', true, error.message));
      }
    }
  };
};

export const updatePublicStyle = data => ({
  type: 'recommendation/updatePublicStyle',
  payload: data,
});

export const uploadStyle = (data, imageUrl) => {
  return async (dispatch, getState) => {
    dispatch(recommendationLoading());
    try {
      const {date, temperature, comment, rating} = data;
      const temp = parseInt(temperature);
      const jwt = getState().user.token;
      const response = await axios.post(
        `${API_URL_STYLE}/user/original`,
        {
          date: date,
          comment: comment,
          temp: temp,
          imageUrl: imageUrl,
          rating: rating,
        },
        {
          headers: {Authorization: `Bearer ${jwt}`},
        },
      );
      console.log(response.data);
      dispatch(uploadedStyle(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage('danger', true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage('danger', true, error.message));
      }
    }
  };
};

export const uploadedStyle = data => ({
  type: 'recommendation/uploadedStyle',
  payload: data,
});

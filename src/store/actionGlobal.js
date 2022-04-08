export const checkConnection = data => {
  return {
    type: 'CHECK_CONNECTION',
    payload: data,
  };
};

export const SetRefreshing = data => {
  return {
    type: 'SET_REFRESH',
    payload: data,
  };
};

export const SetLoading = data => {
  return {
    type: 'SET_LOADING',
    payload: data,
  };
};

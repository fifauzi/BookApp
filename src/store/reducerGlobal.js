const initialState = {
  connection: true,
  refreshing: false,
  loading: false,
};

export const reducerGlobal = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_CONNECTION':
      return {
        ...state,
        connection: action.payload,
      };
    case 'SET_REFRESH':
      return {
        ...state,
        refresh: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

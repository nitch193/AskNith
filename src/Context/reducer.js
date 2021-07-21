let userid = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).id
  : '';
let token = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).accessToken
  : '';
let username = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).user
  : '';

export const initialState = {
  userid: '' || userid,
  username: '' || username,
  token: '' || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initialState,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        userid: action.payload.id,
        token: action.payload.accessToken,
        username: action.payload.user,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        userid: '',
        token: '',
        username: '',
      };

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

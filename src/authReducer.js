import axios from 'axios';


const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const UPDATE_SUCCESS = 'UPDATE_SUCCESS'

const LoginSuccess = (user)=> ({
  type: LOGIN_SUCCESS,
  user
});

const LogoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

const UpdateSuccess = (user) => ({
  type: UPDATE_SUCCESS,
  user: user
});


const login = (credentials ) => {
  return (dispatch)=> {
    // console.log('!!!', credentials)
    return axios.post('/api/session', credentials)
    // credentials is our req.body..
      .then(response => response.data)
      // .then( token => console.log('token is:', token));
      // what is localStorage ?? allows us to set data locally for this website, see it under Application in browser console
      .then( data => {
          localStorage.setItem('token', data.token)
          return axios.get(`/api/session/${data.token}`)
      })
      .then( response => response.data )
      .then( user => dispatch(LoginSuccess(user)))
  };
};

const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(LogoutSuccess())
  }
}


const updateUsersFavorite = (user, product) => {
  return (dispatch) => {
    return axios.put(`/api/users/favorite/${user.id}`, product)
    .then( response => dispatch(UpdateSuccess(response.data)));
  };
};

const updateUsersWorst = (user, product) => {
  return(dispatch) => {
    return axios.put(`/api/users/worst/${user.id}`, product)
    .then( response => dispatch(UpdateSuccess(response.data)));
  };
};

const authReducer = (state={ }, action)=> {
  switch(action.type){
    case LOGIN_SUCCESS:
      return {...state, user: action.user}
    case LOGOUT_SUCCESS:
      return {...state, user: null}
    case UPDATE_SUCCESS:
      state = {...state, user: action.user}
      break;
  }
  return state;
};

export { login, logout, updateUsersFavorite, updateUsersWorst };
export default authReducer;

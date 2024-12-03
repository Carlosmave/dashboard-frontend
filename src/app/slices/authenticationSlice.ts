import { createSlice } from '@reduxjs/toolkit';

export interface AuthenticationState {
  userAccessToken: string | null;
}

const userAccessToken = localStorage.getItem('userAccessToken')
  ? localStorage.getItem('userAccessToken')
  : null;

const initialState: AuthenticationState = {
  userAccessToken: userAccessToken,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      localStorage.setItem('userAccessToken', payload.token);
      state.userAccessToken = payload.token;
    },
    setAccessToken: (state, { payload }) => {
      localStorage.setItem('userAccessToken', payload.token);
      state.userAccessToken = payload.token;
    },
    logout: (state) => {
      localStorage.removeItem('userAccessToken'); // deletes token from storage
      state.userAccessToken = null;
    },
  },
});

export const { loginUser, setAccessToken, logout } =
  authenticationSlice.actions;
  
export default authenticationSlice.reducer;

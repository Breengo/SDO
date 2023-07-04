import { createSlice } from "@reduxjs/toolkit";

type UserData = {
  id: number;
  login: string;
  email: string;
  isStaff: boolean;
  group: String | null;
};

type AuthState = {
  isAuth: boolean;
  userData: UserData | null;
};

const initialState: AuthState = {
  isAuth: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuth = true;
      state.userData = payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

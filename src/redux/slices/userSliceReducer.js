

export const handleAuthUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleLogOutUser = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const hadleRefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const anyrefreshUserPending = state => {
  state.isRefreshing = true;
};
export const anyrefreshUserRejected = state => {
  state.isRefreshing = false;
};
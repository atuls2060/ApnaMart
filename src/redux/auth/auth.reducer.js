export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {

  switch (type) {
  
    default: {
      return state
    }
  }

};
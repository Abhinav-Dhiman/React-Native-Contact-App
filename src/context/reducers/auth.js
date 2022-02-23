const auth = (state, {type, payload}) => {
  // action is destructured into type,payload
  switch (type) {
    case 'LOGIN':
      return state;

    default:
      return state;
  }
};
export default auth;

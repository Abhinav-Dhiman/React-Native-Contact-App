const contacts = (state, {type, payload}) => {
  // action is destructured into type,payload
  switch (type) {
    case 'GET_CONTACTS':
      return state;

    default:
      return state;
  }
};
export default contacts;

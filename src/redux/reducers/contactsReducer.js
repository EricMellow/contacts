export const contactsReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.contact];
    case 'DELETE_CONTACT':
      return;
    default:
      return state;
  }
};
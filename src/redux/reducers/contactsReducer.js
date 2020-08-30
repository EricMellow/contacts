export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.contact];
    case 'DELETE_CONTACT':
      return state.filter((contact) => {
        return action.contact.id !== contact.id;
      });
    default:
      return state;
  }
};
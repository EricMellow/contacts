export const contactsReducer = (state = [{ id: 1, name: 'Grant Fisher', phone: '111-111-1111', email: 'email2' }, { id: 2, name: 'Randy Smith', phone: '222-222-2222', email: 'email1' }], action) => {
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
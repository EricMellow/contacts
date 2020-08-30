export const contactsReducer = (state = [{ id: 1, name: 'one', email: 'one@google', phone: '111-111' }, { id: 2, name: 'two', email: 'two@google', phone: '222-222' }], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return;
    case 'DELETE_CONTACT':
      return;
    default:
      return state;
  }
};
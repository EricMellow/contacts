export const contactsReducer = (state = [{ name: 'one', email: 'one@google', phone: '111-111' }, { name: 'two', email: 'two@google', phone: '222-222' }], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return;
    case 'DELETE_CONTACT':
      return;
    default:
      return state;
  }
};
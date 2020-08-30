export const addContact = (contact) => ({
  type: 'ADD_CONTACT',
  contact
});

export const deleteContact = (contact) => ({
  type: 'DELETE_CONTACT',
  contact
});
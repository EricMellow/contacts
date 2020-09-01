import * as action from "./actions";

describe('addContact', () => {
  it('should return an add contact action', () => {
    const mockContact = {
      id: 402,
      name: 'Test Name',
      email: 'test@email.com',
      phone: '123-456-7890'
    };
    const result = action.addContact(mockContact);
    // expectation
    const expected = {
      type: 'ADD_CONTACT',
      contact: mockContact
    };

    expect(result).toEqual(expected);
  });

  describe('deleteContact', () => {
    it('should return a delete contact action', () => {
      const mockContact = {
        id: 402,
        name: 'Test Name',
        email: 'test@email.com',
        phone: '123-456-7890'
      };
      const result = action.deleteContact(mockContact);
      // expectation
      const expected = {
        type: 'DELETE_CONTACT',
        contact: mockContact
      };

      expect(result).toEqual(expected);
    });
  })

});
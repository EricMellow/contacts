import { contactsReducer } from './contactsReducer';

describe('contactsReducer', () => {
  it('should add a contact to the contacts array', () => {
    const initialState = [];
    const mockAction = {
      type: 'ADD_CONTACT',
      contact: {
        id: 402,
        name: 'Test Name',
        email: 'test@email.com',
        phone: '123-456-7890'
      }
    };
    const result = contactsReducer(initialState, mockAction);
    const expected = [{
      id: 402,
      name: 'Test Name',
      email: 'test@email.com',
      phone: '123-456-7890'
    }]

    expect(result).toEqual(expected);
  });


  it('should remove a contact from the contacts array', () => {
    const initialState = [{
      id: 402,
      name: 'Randy Sanchez',
      email: 'test2@email.com',
      phone: '111-111-1111'
    },
    {
      id: 182,
      name: 'Grant Fisher',
      email: 'test1@email.com',
      phone: '222-222-2222'
    }];

    const mockAction = {
      type: 'DELETE_CONTACT',
      contact: {
        id: 402,
        name: 'Randy Sanchez',
        email: 'test2@email.com',
        phone: '111-111-1111'
      }
    };

    const result = contactsReducer(initialState, mockAction);
    const expected = [{
      id: 182,
      name: 'Grant Fisher',
      email: 'test1@email.com',
      phone: '222-222-2222'
    }];

    expect(result).toEqual(expected);
  });


  it('should return state if it is passed an action that does not match one of the types', () => {
    const initialState = [];
    const mockAction = {
      type: 'FAKE_ACTION',
      contact: {
        id: 182,
        name: 'Grant Fisher',
        email: 'test1@email.com',
        phone: '222-222-2222'
      }
    };
    const result = contactsReducer(initialState, mockAction);

    expect(result).toEqual(initialState);
  });

});
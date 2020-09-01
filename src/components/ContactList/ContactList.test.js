import React from 'react';
import { ContactList, mapStateToProps, mapDispatchToProps } from './ContactList';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ContactList', () => {
  let wrapper;

  beforeEach(() => {
    const mockContacts = [{
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
    wrapper = shallow(<ContactList contacts={mockContacts}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('filterContacts', () => {
  
    it('should filter based on name', () => {
      const mockEvent = {
        target: {
          value: 'rant'
        }
      };
      const expected = [{
        id: 182,
        name: 'Grant Fisher',
        email: 'test1@email.com',
        phone: '222-222-2222'
      }];
      wrapper.instance().filterContacts(mockEvent)
      expect(wrapper.state('filteredContacts')).toEqual(expected);
    })

    it('should filter based on email', () => {
      const mockEvent = {
        target: {
          value: 'test2'
        }
      };
      const expected = [{
        id: 402,
        name: 'Randy Sanchez',
        email: 'test2@email.com',
        phone: '111-111-1111'
      }];
      wrapper.instance().filterContacts(mockEvent)
      expect(wrapper.state('filteredContacts')).toEqual(expected);
    })

    it('should filter based on phone', () => {
      const mockEvent = {
        target: {
          value: '11'
        }
      };
      const expected = [{
        id: 402,
        name: 'Randy Sanchez',
        email: 'test2@email.com',
        phone: '111-111-1111'
      }];
      wrapper.instance().filterContacts(mockEvent)
      expect(wrapper.state('filteredContacts')).toEqual(expected);
    })

    it('should filter based on all fields at once', () => {
      const mockEvent = {
        target: {
          value: '1'
        }
      };
      const expected = [{
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
      wrapper.instance().filterContacts(mockEvent)
      expect(wrapper.state('filteredContacts')).toEqual(expected);
    })
  })

  describe('deleteContact', () => {
    it('should call deleteContact with a contact object', () => {
      const mockContacts = [{
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
      const mockContact = {
        id: 402,
        name: 'Randy Sanchez',
        email: 'test2@email.com',
        phone: '111-111-1111'
      }
      const mockDeleteContact = jest.fn();
      const wrapper = shallow(<ContactList deleteContact={mockDeleteContact} contacts={mockContacts}/>);
      wrapper.instance().deleteContact(mockContact);
      expect(wrapper.instance().props.deleteContact).toHaveBeenCalledWith(mockContact);
    })
  })

  describe('mapStateToProps', () => {
    it('should map contacts to props', () => {
      const state = {
        contacts: [{
          id: 402,
          name: 'Test Name',
          email: 'test@email.com',
          phone: '123-456-7890'
        }]
      };
      const expected = {
        contacts: [{
          id: 402,
          name: 'Test Name',
          email: 'test@email.com',
          phone: '123-456-7890'
        }]
      };
      const mappedProps = mapStateToProps(state);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params on deleteContact', () => {
      const mockContact = {
        id: 402,
        name: 'Test Name',
        email: 'test@email.com',
        phone: '123-456-7890'
      };
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'DELETE_CONTACT',
        contact: mockContact
      };

      mappedProps.deleteContact(mockContact);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  })
});

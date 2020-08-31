import React from 'react';
import { AddContacts, mapDispatchToProps } from './AddContacts';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AddContacts', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddContacts />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('clearInputs', () => {
    it('should setState with all empty strings', () => {
      const mockState = {
        name: 'Test Name',
        email: 'test@email.com',
        phone: '123-456-7890'
      };
      wrapper.setState(mockState);
      expect(wrapper.state('name')).toEqual('Test Name');
      expect(wrapper.state('email')).toEqual('test@email.com');
      expect(wrapper.state('phone')).toEqual('123-456-7890');
      wrapper.instance().clearInputs();
      expect(wrapper.state('name')).toEqual('');
      expect(wrapper.state('email')).toEqual('');
      expect(wrapper.state('phone')).toEqual('');
    })
  })

  describe('handleChange', () => {
    it('should set state with the id and value of the event passed to it', () => {
      const mockEmailEvent = {
        target: {
          id: 'email',
          value: 'test@email.com'
        }
      };
      expect(wrapper.state('email')).toEqual('');
      wrapper.instance().handleChange(mockEmailEvent);
      expect(wrapper.state('email')).toEqual('test@email.com');
    })

    it('should not change the change any other state values', () => {
      const mockEmailEvent = {
        target: {
          id: 'email',
          value: 'test@email.com'
        }
      };
      expect(wrapper.state('name')).toEqual('');
      expect(wrapper.state('phone')).toEqual('');
      wrapper.instance().handleChange(mockEmailEvent);
      expect(wrapper.state('name')).toEqual('');
      expect(wrapper.state('phone')).toEqual('');
    })

    it ('should work for every key-value pair in state', () => {
      const mockNameEvent = {
        target: {
          id: 'name',
          value: 'Test Name'
        }
      };

      const mockPhoneEvent = {
        target: {
          id: 'phone',
          value: '123-456-7890'
        }
      };
      expect(wrapper.state('name')).toEqual('');
      expect(wrapper.state('phone')).toEqual('');
      wrapper.instance().handleChange(mockNameEvent);
      expect(wrapper.state('name')).toEqual('Test Name');
      wrapper.instance().handleChange(mockPhoneEvent);
      expect(wrapper.state('phone')).toEqual('123-456-7890');
    })
  })

  describe('saveContact', () => {
    it('should call addContact with a contact object', () => {
      const mockState = {
        name: 'Test Name',
        email: 'test@email.com',
        phone: '123-456-7890'
      };
      const mockEvent = {
        preventDefault: jest.fn()
      }
      const mockAddContact = jest.fn();
      const wrapper = shallow(<AddContacts addContact={mockAddContact} />);
      wrapper.setState(mockState);
      wrapper.instance().saveContact(mockEvent);
      expect(wrapper.instance().props.addContact).toHaveBeenCalledWith({
        id: Date.now(),
        name: 'Test Name',
        email: 'test@email.com',
        phone: '123-456-7890'
      });

    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params on addContact', () => {
      const mockContact = {
        id: 402,
        name: 'Test Name',
        email: 'test@email.com',
        phone: '123-456-7890'
      };
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_CONTACT',
        contact: mockContact
      };

      mappedProps.addContact(mockContact);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  })

});

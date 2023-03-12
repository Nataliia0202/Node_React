import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { addNewContact } from 'redux/operations/contactsOperations';
import {
  ClassicFormStyle,
  ClassicLabelForm,
  ClassicInputForm,
  ClassicButton,
} from 'components/GlobalStyles';
import { toastWarnDuplicate } from 'components/services/toasts';
import {
  PersonIconStyle,
  LocalPhoneIconStyle,
} from 'components/icons/icons.styled';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContact === true) {
      reset();
      return toastWarnDuplicate(name);
    }
    const newContact = {
      name,
      phone,
    };
    dispatch(addNewContact(newContact));
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <ClassicFormStyle onSubmit={onSubmitForm}>
      <ClassicLabelForm>
        Name
        <ClassicInputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <PersonIconStyle />
      </ClassicLabelForm>
      <ClassicLabelForm>
        Number
        <ClassicInputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
        <LocalPhoneIconStyle />
      </ClassicLabelForm>
      <ClassicButton type="submit">
        Add contact
        <AddIcCallIcon sx={{ marginLeft: '5px' }} />
      </ClassicButton>
    </ClassicFormStyle>
  );
};

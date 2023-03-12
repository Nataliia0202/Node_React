import { ContactItemEntrails } from 'components/ContactList/ContactListItem';
import {
  ContactListStyle,
  ContactListItem,
} from 'components/ContactList/ContactList.styled';
import { selectFilteredContacts, selectAuth } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations/contactsOperations';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuth);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <ContactListStyle>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <ContactItemEntrails id={id} name={name} number={number} />
          </ContactListItem>
        );
      })}
    </ContactListStyle>
  );
};

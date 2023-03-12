import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loading } from 'components/Loading';
import {
  MainTitle,
  SecondTitle,
  WarningMessage,
} from 'components/GlobalStyles';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selector';

export const Contacts = () => {
  const loading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Box as="section" mb={5}>
        <MainTitle>Ready to add new people?</MainTitle>
        <ContactForm />
      </Box>
      <Box as="section" mb={5}>
        <SecondTitle>My Contacts</SecondTitle>
        <Filter />
        {loading === true && <Loading />}
        <ContactList />
        {contacts.length === 0 && (
          <WarningMessage>
            Looks like you don`t have any contacts yet or just clear them all.
            Please add new contact!
          </WarningMessage>
        )}
      </Box>
    </>
  );
};

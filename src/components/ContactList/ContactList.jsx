import { Grid } from '@mui/material';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleName = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase(normalizedFilter))
    );
  };
  const contactsArr = getVisibleName();

  return (
    <Grid container spacing={4} marginTop={2}>
      {contactsArr.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </Grid>
  );
};

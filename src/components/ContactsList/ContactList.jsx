import { PhonebookList, ListItem, Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import { FaRegTimesCircle } from 'react-icons/fa';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <PhonebookList>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name} : {number}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            <FaRegTimesCircle size="20px" />
          </Button>
        </ListItem>
      ))}
    </PhonebookList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

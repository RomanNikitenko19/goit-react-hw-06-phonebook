import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";


const ContactsList = ({ filterContacts, deleteContacts }) => {
  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id} id={id} name={name} number={number} deleteContacts={deleteContacts}/>
          );
        })}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  deleteContacts: PropTypes.func.isRequired,
  filterContacts: PropTypes.array.isRequired,
};

export default ContactsList;

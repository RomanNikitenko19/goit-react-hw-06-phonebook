import PropTypes from "prop-types";
import Title from "../Title";
import ContactsList from "../ContactsList";
import s from './Contacts.module.css';

const Contacts = ({ filterContacts, handleChange, filter, deleteContacts, contacts }) => {
  return (
    <>
      <section className={s.Contacts}>
        <Title title={"Contacts"} />
        <label>
          Find contact by name
          <input onChange={handleChange} value={filter} type="text" name="filter" />
        </label>
        <ContactsList filterContacts={filterContacts} deleteContacts={deleteContacts} />
      </section>
    </>
  );
};
Contacts.propTypes = {
  filterContacts: PropTypes.array.isRequired,
  deleteContacts: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired
};

export default Contacts;

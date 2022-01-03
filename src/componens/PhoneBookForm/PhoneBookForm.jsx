import PropTypes from "prop-types";
import Title from "../Title";
import Form from "../Form";
import s from './PhoneBookForm.module.css';

const PhoneBookForm = ({ addContacts}) => {
  return (
    <>
      <section className={s.PhoneBookForm}>
        <Title title={"Phonebook"} />
        <Form addContacts={addContacts} />
      </section>
    </>
  );
};

PhoneBookForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
};

export default PhoneBookForm;

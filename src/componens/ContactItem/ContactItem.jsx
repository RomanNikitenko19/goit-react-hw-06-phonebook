import React from 'react';
import PropTypes from "prop-types";
import MyButton from '../Button/MyButton';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, deleteContacts }) => {
  return (
    <>
      <li className={s.Item}>
        {`${name}: ${number}`}
        <MyButton onClick={() => deleteContacts(id)}>delete</MyButton>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactItem;
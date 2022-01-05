import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsSlice";
import { useState } from "react";
import MyButton from "../Button/MyButton";

const Form = () => {
  const сontacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        console.log("noob");
        break;
    }
  };

  const addContacts = (name, number) => {
    const result = { id: nanoid(), number: number, name: name };
    const isUniqueName = checkName(name);

    if (isUniqueName) {
      return alert(`${name} no alredy in contacts`);
    }
    dispatch(addContact(result));
  };

  const checkName = (value) => сontacts.some(({ name }) => name === value);

  const handleSubmit = (event) => {
    event.preventDefault();

    addContacts(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <MyButton type="submit">Add contact</MyButton>
      </form>
    </>
  );
};

export default Form;
//////////////////////////////////////////////////////////////////////
// import { nanoid } from "nanoid";
// import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../redux/contacts/contactsAction";
// import { useState } from "react";
// import MyButton from "../Button/MyButton";

// const Form = () => {
//   const сontacts = useSelector((state) => state.contacts.items);
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     switch (name) {
//       case "name":
//         setName(value);
//         break;

//       case "number":
//         setNumber(value);
//         break;

//       default:
//         console.log("noob");
//         break;
//     }
//   };

//   const addContacts = (name, number) => {
//     const result = { id: nanoid(), number: number, name: name };
//     const isUniqueName = checkName(name);

//     if (isUniqueName) {
//       return alert(`${name} no alredy in contacts`);
//     }
//     dispatch(actions.addContacts(result));
//   };

//   const checkName = (value) => сontacts.some(({ name }) => name === value);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     addContacts(name, number);
//     reset();
//   };

//   const reset = () => {
//     setName("");
//     setNumber("");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name
//           <input
//             onChange={handleChange}
//             value={name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label>
//           Number
//           <input
//             onChange={handleChange}
//             value={number}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <MyButton type="submit">Add contact</MyButton>
//       </form>
//     </>
//   );
// };

// export default Form;
//////////////////////////////////////////////////////////////////////////////////////////////
// import PropTypes from "prop-types";
// import { useState } from 'react';
// import MyButton from "../Button/MyButton";

// const Form = ({ addContacts }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const  handleChange = (event) => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'name':
//         setName(value)
//         break;

//       case 'number':
//         setNumber(value)
//         break;

//       default:
//         console.log('noob');
//         break;
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     addContacts(name, number);
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name
//           <input
//             onChange={handleChange}
//             value={name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label>
//           Number
//           <input
//             onChange={handleChange}
//             value={number}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <MyButton type="submit">Add contact</MyButton>
//       </form>
//     </>
//   );
// }

// Form.propTypes = {
//   addContacts: PropTypes.func.isRequired,
// };

// export default Form;

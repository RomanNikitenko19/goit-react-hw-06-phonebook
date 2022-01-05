import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice";
import ContactItem from "../ContactItem/ContactItem";

const ContactsList = () => {
  const сontacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return сontacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContacts = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        {filterContacts().map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} deleteContacts={deleteContacts} />;
        })}
      </ul>
    </>
  );
};

export default ContactsList;

//////////////////////////////////////////////////////////////////////
// import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../redux/contacts/contactsAction";
// import ContactItem from "../ContactItem/ContactItem";

// const ContactsList = () => {
//   const сontacts = useSelector((state) => state.contacts.items);
//   const filter = useSelector((state) => state.contacts.filter);
//   const dispatch = useDispatch();

//   const filterContacts = () => {
//     return сontacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
//   };

//   const deleteContacts = (id) => {
//     dispatch(actions.deleteContact(id));
//   };

//   return (
//     <>
//       <ul>
//         {filterContacts().map(({ id, name, number }) => {
//           return <ContactItem key={id} id={id} name={name} number={number} deleteContacts={deleteContacts} />;
//         })}
//       </ul>
//     </>
//   );
// };

// export default ContactsList;

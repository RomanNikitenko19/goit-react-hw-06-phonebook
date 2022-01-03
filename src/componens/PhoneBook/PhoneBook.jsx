import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import PhoneBookForm from "../PhoneBookForm";
import Contacts from "../Contacts";
import * as localStorage from "../../services/localStorage";

const PhoneBook = () => {
  const [сontacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const LOCALSTORAGE_KEY = "PhoneBook_contacts";

  const addContacts = (name, number) => {
    const result = { id: nanoid(), number: number, name: name };
    const isUniqueName = checkName(name);

    if (isUniqueName) {
      return alert(`${name} no alredy in contacts`);
    }
    setContacts((prevContacts) => [...prevContacts, result]);
  };

  const checkName = (value) => сontacts.some(({ name }) => name === value);

  const handleChange = (event) => {
    const { value } = event.target;

    setFilter(value);
  };

  const filterContacts = () => {
    return сontacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContacts = (id) => {
    setContacts(сontacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    const phoneBook = localStorage.get(LOCALSTORAGE_KEY);
    if (phoneBook) {
      setContacts(phoneBook);
    }
  }, []);

  useEffect(() => {
    localStorage.save(LOCALSTORAGE_KEY, сontacts);
  }, [сontacts]);

  return (
    <>
      <PhoneBookForm addContacts={addContacts} />
      {Boolean(сontacts.length) && (
        <Contacts
          contacts={сontacts}
          filterContacts={filterContacts()}
          handleChange={handleChange}
          filter={filter}
          deleteContacts={deleteContacts}
        />
      )}
    </>
  );
};

export default PhoneBook;

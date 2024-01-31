import { useState, useEffect } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import css from "./App.module.css";

const getContacts = () => {
  const savedContacts = window.localStorage.getItem("contacts");
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
};

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [contactFilter, setContactFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  const showSearchBox = contacts.length > 0;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      {showSearchBox && (
        <SearchBox value={contactFilter} onChange={setContactFilter} />
      )}
      <ContactList items={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

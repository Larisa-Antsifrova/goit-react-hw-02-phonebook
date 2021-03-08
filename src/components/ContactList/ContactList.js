import React from 'react';

const ContactList = ({ filtered }) => {
  return (
    <ul>
      {filtered.length ? (
        filtered.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))
      ) : (
        <li>No contact found</li>
      )}
    </ul>
  );
};

export default ContactList;

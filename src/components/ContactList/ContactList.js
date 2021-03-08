import React from 'react';

const ContactList = ({ filtered, onDeleteContact }) => {
  return (
    <ul>
      {filtered.length ? (
        filtered.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => {
                onDeleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <li>No contact found</li>
      )}
    </ul>
  );
};

export default ContactList;

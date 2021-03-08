import React from 'react';

import styles from './ContactList.module.css';

const ContactList = ({ filtered, onDeleteContact }) => {
  return (
    <ul className={styles.contacts}>
      {filtered.length ? (
        filtered.map(contact => (
          <li key={contact.id} className={styles.item}>
            <div>
              <p>{contact.name}:</p>
              <p>{contact.number}</p>
            </div>

            <button
              className={styles.btn}
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

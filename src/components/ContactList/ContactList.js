import React from 'react';
import PropTypes from 'prop-types';

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
        <li className={styles.notification}>No contact found</li>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

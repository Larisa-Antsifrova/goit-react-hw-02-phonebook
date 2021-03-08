import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filterValue, filterUpdate }) => {
  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={filterUpdate}
          autoComplete="off"
          required
        />
      </label>
    </div>
  );
};

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  filterUpdate: PropTypes.func.isRequired,
};

export default Filter;

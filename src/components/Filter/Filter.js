import React from 'react';

const Filter = ({ filterValue, filterUpdate }) => {
  return (
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
  );
};

export default Filter;

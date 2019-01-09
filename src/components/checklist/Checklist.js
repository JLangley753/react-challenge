import React from 'react';

const Checkbox = ({number, isChecked, onCheckboxChange}) => (<div className="checkbox">
  <input type="checkbox" name={number} checked={isChecked} onChange={onCheckboxChange}/>
  <p>Item {number}</p>
</div>);

export default Checkbox;

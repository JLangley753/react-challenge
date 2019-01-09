import React from 'react';

// Using the props handed down by App, each checkbox is created with the corresponding number next to it, a 'checked' status and instructions on what to do when it is changed/checked.

const Checkbox = ({number, isChecked, onCheckboxChange}) => (<div className="checkbox">
  <input type="checkbox" name={number} checked={isChecked} onChange={onCheckboxChange}/>
  <p>Item {number}</p>
</div>);

export default Checkbox;

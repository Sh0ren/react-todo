// eslint-disable-next-line no-unused-vars
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const [label, changeLabel] = useState('');
  const [min, changeMin] = useState('');
  const [sec, changeSec] = useState('');

  const onLabelChange = (e) => {
    changeLabel(e.target.value);
  };

  const onMinChange = (e) => changeMin(e.target.value);

  const onSecondChange = (e) => changeSec(e.target.value);

  const onSubmit = (e) => {
    // eslint-disable-next-line react/destructuring-assignment
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    props.onAdded(label, Number(min), Number(sec));
    changeLabel('');
    changeMin('');
    changeSec('');
  };

  return (
    <form className='new-todo-form' onSubmit={onSubmit}>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        onChange={onLabelChange}
        /* eslint-disable-next-line react/destructuring-assignment */
        value={label}
      />
      <input
        className='new-todo-form__timer'
        placeholder='Min'
        onChange={onMinChange}
        /* eslint-disable-next-line react/destructuring-assignment */
        value={min}
      />
      <input
        className='new-todo-form__timer'
        placeholder='Sec'
        onChange={onSecondChange}
        /* eslint-disable-next-line react/destructuring-assignment */
        value={sec}
      />
      <input type='submit' hidden />
    </form>
  );
}

Input.defaultProps = {
  onAdded: () => {},
};

Input.propTypes = {
  onAdded: PropTypes.func,
};

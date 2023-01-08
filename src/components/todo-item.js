// eslint-disable-next-line no-unused-vars
import Timer from './timer';
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function TodoItem(props) {
  const className = () => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props.status === true) {
      return 'active';
    } else {
      return 'completed';
    }
  };

  const isTimerCounting = () => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props.status === true) {
      return true;
    } else {
      return false;
    }
  };

  const { label, timeCreate, onToggleImportant, onDeleted, timer } = props;

  console.log(timer);

  return (
    <li className={className()}>
      <div className='view'>
        <input className='toggle' type='checkbox' onClick={onToggleImportant} />
        <label>
          <span className='description'>{label}</span>
          <Timer timer={timer} isTimerCounting={isTimerCounting()} />
          <span className='created'>{timeCreate}</span>
        </label>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type='button' className='icon icon-edit' />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type='button'
          className='icon icon-destroy'
          onClick={onDeleted}
        />
      </div>
    </li>
  );
}

TodoItem.defaultProps = {
  label: 'Koshka',
  timeCreate: 'Davno',
  status: true,
  onToggleImportant: () => {
    throw new Error('onToggleImportant broken');
  },
  onDeleted: () => {
    throw new Error('onDeleted broken');
  },
};

TodoItem.propTypes = {
  label: PropTypes.string,
  timeCreate: PropTypes.string,
  status: PropTypes.bool,
  onToggleImportant: PropTypes.func,
  onDeleted: PropTypes.func,
};

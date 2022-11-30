// eslint-disable-next-line no-unused-vars
import React from 'react';

function Footer(props) {
  Footer.defaultProps = {
    uncompletedCount: 0,
    onFiltered: () => {},
    onComplete: () => {},
  };

  const { uncompletedCount, onFiltered, onComplete } = props;
  return (
    <footer className='footer'>
      <span className='todo-count'>{uncompletedCount} items left</span>
      <ul className='filters'>
        <li>
          <button
            type='button'
            className='selected'
            onClick={() => onFiltered()}
          >
            All
          </button>
        </li>
        <li>
          <button type='button' onClick={() => onFiltered(true)}>
            Active
          </button>
        </li>
        <li>
          <button type='button' onClick={() => onFiltered(false)}>
            Completed
          </button>
        </li>
      </ul>
      <button type='button' className='clear-completed' onClick={onComplete}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  state = {
    label: '',
    // eslint-disable-next-line react/no-unused-state
    min: '',
    // eslint-disable-next-line react/no-unused-state
    sec: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onMinChange = (e) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      min: e.target.value,
    });
  };

  onSecondChange = (e) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      sec: e.target.value,
    });
  };

  onSubmit = (e) => {
    // eslint-disable-next-line react/destructuring-assignment
    console.log(typeof Number(this.state.min));
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onAdded(
      // eslint-disable-next-line react/destructuring-assignment
      this.state.label,
      // eslint-disable-next-line react/destructuring-assignment
      Number(this.state.min),
      // eslint-disable-next-line react/destructuring-assignment
      Number(this.state.sec)
    );
    this.setState({ label: '', min: '', sec: '' });
  };

  render() {
    return (
      <form className='new-todo-form' onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          onChange={this.onLabelChange}
          /* eslint-disable-next-line react/destructuring-assignment */
          value={this.state.label}
        />
        <input
          className='new-todo-form__timer'
          placeholder='Min'
          onChange={this.onMinChange}
          /* eslint-disable-next-line react/destructuring-assignment */
          value={this.state.min}
        />
        <input
          className='new-todo-form__timer'
          placeholder='Sec'
          onChange={this.onSecondChange}
          /* eslint-disable-next-line react/destructuring-assignment */
          value={this.state.sec}
        />
        <input type='submit' hidden />
      </form>
    );
  }
}

Input.defaultProps = {
  onAdded: () => {},
};

Input.propTypes = {
  onAdded: PropTypes.func,
};

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onAdded(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          onChange={this.onLabelChange}
          /* eslint-disable-next-line react/destructuring-assignment */
          value={this.state.label}
        />
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

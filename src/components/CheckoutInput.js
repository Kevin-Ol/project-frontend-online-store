import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutInput extends Component {
  render() {
    const { placeholder, name, onChange, value, type } = this.props;
    return (
      <label htmlFor={ name }>
        <input
          name={ name }
          data-testid={ `checkout-${name}` }
          placeholder={ placeholder }
          type={ type }
          value={ value }
          id={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

CheckoutInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
};

export default CheckoutInput;

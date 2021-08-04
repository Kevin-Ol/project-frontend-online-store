import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  rating: 0,
  comment: '',
};

class Form extends Component {
  constructor() {
    super();

    this.state = initialState;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmitForm = () => {
    const { onClick } = this.props;
    onClick(this.state)
    this.setState({
      name: '',
      rating: 0,
      comment: '',
    });
  }

  render() {
    const { name, rating, comment } = this.state;
    return (
      <form className="form-details">
        <label htmlFor="name-label">
          Nome:
        </label>
        <input
          type="text"
          name="name"
          value={ name }
          onChange={ this.handleChange }
          id="name-label"
          required
        />
        <label htmlFor="avaliator-label">
          Avaliação:
        </label>
        <input
          type="number"
          name="rating"
          value={ rating }
          min="1"
          max="5"
          onChange={ this.handleChange }
          id="avaliator-label"
          required
        />
        <label htmlFor="comment-label">
          Comentário:
        </label>
        <textarea
          cols="30"
          rows="10"
          type="text"
          name="comment"
          value={ comment }
          onChange={ this.handleChange }
          id="comment-label"
          data-testid="product-detail-evaluation"
        />
        <button type="button" className="submitBtn" onClick={ this.onSubmitForm }> Avalie</button>
      </form>
    );
  }
}

Form.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Form;

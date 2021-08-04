import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Evaluation extends Component {
  render() {
    const { name, rating, comment } = this.props;
    return (
      <section className="evaluation">
        <p>Nome: { name }</p>
        <p>Nota: { rating }</p>
        <p>Cometário: { comment }</p>
      </section>
    );
  }
}

Evaluation.propTypes = {
  name: Proptypes.string.isRequired,
  rating: Proptypes.oneOfType([Proptypes.number, Proptypes.string]).isRequired,
  comment: Proptypes.string.isRequired,
};
export default Evaluation;

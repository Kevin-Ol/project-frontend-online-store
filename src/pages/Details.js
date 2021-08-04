import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import ShoppingIcon from '../components/ShoppingIcon';
import Evaluation from '../components/Evaluation';
import * as storage from '../services/storage';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      total: storage.getTotalItems(),
      evaluations: [],
    }

    this.addItemToCart = this.addItemToCart.bind(this);
    this.addAvaliation = this.addAvaliation.bind(this);
  }

  addItemToCart(product) {
    if (localStorage.getItem('carrinho')) {
      storage.addItemToCart(product)
    } else {
      product.quantity = 1;
      const cart = [product];
      localStorage.setItem('carrinho', JSON.stringify(cart));
    }
    this.setState({ total: storage.getTotalItems() });
  }

  addAvaliation(state) {
    this.setState((prevState) => ({ evaluations: [...prevState.evaluations, state ]}))
  }

  render() {
    const { props: { location: { state } } } = this;
    const { title, price, thumbnail, shipping} = state;
    const { total, evaluations } = this.state

    return (
      <section>
          <div className="cart-icon">
            <Link
              to="/shopping-cart"
              data-testid="shopping-cart-button"
            >
              <ShoppingIcon />
            </Link>
            <span data-testid="shopping-cart-size">{ total }</span>
          </div>
        <div className="product-details">
          <h3 data-testid="product-detail-name">{ title }</h3>
          <img alt="imagem do produto" src={ thumbnail } />
          <div>
            <span>{`Preço: R$ ${price.toFixed(2)}`}</span>
            {shipping.free_shipping && <span className="free-shipping" data-testid="free-shipping">Frete grátis</span>}
          </div>
          <button
            type="button"
            className="add-btn"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.addItemToCart(state) }
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <Form onClick={ this.addAvaliation }/>
        { evaluations.map(({name, rating, comment}, index) => (
        <Evaluation 
          key={ index }
          name={ name }
          rating={ rating }
          comment={ comment }
        />  
        )
      )}
      </section>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;

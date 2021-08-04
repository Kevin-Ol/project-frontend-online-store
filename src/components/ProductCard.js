import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as storage from '../services/storage';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(product) {
    if (localStorage.getItem('carrinho')) {
      storage.addItemToCart(product)
    } else {
      product.quantity = 1;
      const cart = [product];
      localStorage.setItem('carrinho', JSON.stringify(cart));
    }
    const { updateTotal } = this.props;
    updateTotal(storage.getTotalItems());
  }

  render() {
    const {
      product,
      product: {
        id,
        title,
        thumbnail,
        price,
        shipping,
      },
    } = this.props;

    return (
      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            state: product,
          } }
        >
          <h4>{title}</h4>
          <img src={ thumbnail } alt="Product Thumbnail" />
          <div className="price">
            <span>
              {`Preço: R$ ${price.toFixed(2)}`}
            </span>
            {shipping.free_shipping && <span className="free-shipping" data-testid="free-shipping">Frete grátis</span>}
          </div>
        </Link>
        <button
          type="button"
          className="add-btn"
          data-testid="product-add-to-cart"
          onClick={ () => this.addItemToCart(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = ({
  description: PropTypes.string,
  prodImg: PropTypes.string,
  price: PropTypes.number,
  shipping: PropTypes.string,
}).isRequired;

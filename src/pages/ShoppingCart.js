import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as storage from '../services/storage';

class ShoppingCart extends Component {
  constructor() {
    super();

    const cart = JSON.parse(localStorage.getItem('carrinho'));
    let items = []
    if (cart) {
      items = [...cart]
    }

    this.state = {
      items,
    };
    

    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.addItemFromCart = this.addItemFromCart.bind(this);
    this.deleteItemFromCart = this.deleteItemFromCart.bind(this);
  }

  removeItemFromCart(product) {
    storage.removeItemFromCart(product);
    const currentCart = JSON.parse(localStorage.getItem('carrinho'));
    this.setState({ items: [...currentCart] });
  }

  addItemFromCart(product) {
    storage.addItemToCart(product);
    const currentCart = JSON.parse(localStorage.getItem('carrinho'));
    this.setState({ items: [...currentCart] });
  }

  deleteItemFromCart(product) {
    storage.deleteItemFromCart(product);
    const currentCart = JSON.parse(localStorage.getItem('carrinho'));
    this.setState({ items: [...currentCart] });
  }

  getTotal(){
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if(cart) {
      const total = cart.reduce((acc, { quantity, price }) => {
        acc += quantity * price;
        return acc;
      }, 0)
      return total;
    }
    return 0;
  }

  render() {
    const { items } = this.state;
    const total = this.getTotal();

    if (total === 0) {
      return (
        <p 
          className="empyt-cart" 
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio!
        </p>
        );
    }

    return (
      <main className="cart-items">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Preço</th>
              <th>Diminuir</th>
              <th>Total</th>
              <th>Aumentar</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            { items.map((product) => (
              <tr key={ product.id }>
                <td
                  data-testid="shopping-cart-product-name "
                >
                  {product.title}
                </td>
                <td
                  data-testid="shopping-cart-product-name "
                >
                  R$: {product.price}
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={ () => this.removeItemFromCart(product) }
                    >
                    -
                  </button>
                </td>
                <td data-testid="shopping-cart-product-quantity">{product.quantity}</td>
                <td>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ () => this.addItemFromCart(product) }
                    >
                    +
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={ () => this.deleteItemFromCart(product) }
                    >
                    X
                  </button>
                </td>
              </tr>))}
          </tbody>
        </table>
        <p data-testid="shopping-cart-size">Total: { total.toFixed(2) }</p>
        <Link
          to="/checkout"
          data-testid="checkout-products"
        >
          Finalizar compra
        </Link>
      </main>
    );
  }
}

ShoppingCart.propTypes = ({
  productList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;

export default ShoppingCart;

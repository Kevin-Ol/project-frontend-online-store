import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import * as api from '../services/api';
import * as storage from '../services/storage';
import ProductCard from '../components/ProductCard';
import ShoppingIcon from '../components/ShoppingIcon';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      category: '',
      prodList: [],
      render: false,
      isEmpty: true,
      total: storage.getTotalItems(),
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.buttonLogic = this.buttonLogic.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
  }

  handleChangeCategory({ target }) {
    const { value } = target;
    this.setState({
      category: value,
    }, () => {
      const { category } = this.state;

      if (category) {
        api.getProductsFromCategoryAndQuery(category, false)
          .then((res) => {
            const products = res.results;
            this.setState({
              prodList: [...products],
            }, () => this.setState({
              render: true,
              isEmpty: false,
            }));
          });
      }
    });
  }

  handleChangeInput({ target }) {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  buttonLogic() {
    const { query, category } = this.state;
    if (query) {
      api.getProductsFromCategoryAndQuery(category, query)
        .then((res) => {
          const products = res.results;
          this.setState({
            prodList: [...products],
            isEmpty: false,
            render: true,
          });
        });
    }
  }

  updateTotal(number) {
    this.setState({ total: number });
  }

  renderParag() {
    return (
      <p data-testid="home-initial-message" className="inital-text">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }

  renderList() {
    const { prodList } = this.state;
    return (
      <div className="product-list">
      {prodList.map(
        (prod) => (
          <ProductCard
            className="product-card"
            key={ prod.id }
            product={ prod }
            updateTotal={ this.updateTotal }
            />),
      )}
      </div>
    );
  }

  render() {
    const { render, query, isEmpty, total } = this.state;

    return (
      <>
        <div className="nav-bar">
          <Categories onClick={ this.handleChangeCategory } />
          <div className="searchbar">
            <input
              data-testid="query-input"
              placeholder="Procure um produto"
              type="text"
              name="query"
              onChange={ this.handleChangeInput }
              value={ query }
              onKeyUp={ (event) => event.key === "Enter" && this.buttonLogic() }
              />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.buttonLogic }
              >
              Pesquisar
            </button>
          </div>
            <div className="cart-icon">
            <Link data-testid="shopping-cart-button" to="/shopping-cart">
              <ShoppingIcon />
            </Link>
            <span data-testid="shopping-cart-size">{ total }</span>
          </div>
        </div>
        <main className="main-page">
          { isEmpty && this.renderParag() }
          { render && this.renderList() }
        </main>
      </>
    );
  }
}

export default Main;

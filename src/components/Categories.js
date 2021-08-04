import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    api.getCategories().then((response) => {
      this.setState({
        categories: [...response],
        loading: false,
      });
    });
  }

  render() {
    const { categories, loading } = this.state;
    const { onClick } = this.props;

    if (loading) {
      return (<aside><span>Carregando</span></aside>);
    }
    return (
      <aside>
        <button className="dropdown_button">Categorias</button>
        <ol className="categories">
          { categories.map((category) => (
            <li
              key={ category.id }
            >
              <label
                htmlFor={ category.name }
                data-testid="category"
              >
                <input
                  type="radio"
                  id={ category.name }
                  name="category"
                  value={ category.id }
                  onClick={ onClick }
                />
                { category.name }
              </label>
            </li>))}
        </ol>
      </aside>
    );
  }
}

Categories.propTypes = ({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default Categories;

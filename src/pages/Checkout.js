import React, { Component } from 'react';
import CheckoutInput from '../components/CheckoutInput';

const inputs = [
  {
    placeholder: 'Nome completo',
    name: 'fullname',
    type: 'text',
  },

  {
    placeholder: 'Email',
    name: 'email',
    type: 'text',
  },

  {
    placeholder: 'CPF',
    name: 'cpf',
    type: 'text',
  },

  {
    placeholder: 'Telefone',
    name: 'phone',
    type: 'text',
  },

  {
    placeholder: 'CEP',
    name: 'cep',
    type: 'text',
  },
  {
    placeholder: 'Endereço',
    name: 'address',
    type: 'text',
  },
];

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      sucess: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.finishBuy = this.finishBuy.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  finishBuy() {
    this.setState({ sucess: true })
  }

  render() {
    const { state } = this;
    const { sucess } = state;

    if (sucess) {
      return (<p className="finish">Obrigado por comprar conosco, { state.fullname }!</p>)
    }

    return (
      <main>
        <form className="checkout">
          { inputs.map((field) => (
            <CheckoutInput
              key={ field.name }
              placeholder={ field.placeholder }
              name={ field.name }
              onChange={ this.handleChange }
              value={ state[field.name] }
              type={ field.type }
            />)) }
        </form>
        <button type="button" className="finish-btn" onClick={ this.finishBuy }>Finalizar</button>
      </main>
    );
  }
}

export default Checkout;

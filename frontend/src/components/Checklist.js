import React from 'react';
import './styled-components/Checklist.css';

class Checklist extends React.Component {
  constructor() {
    super();
    
    this.state = {
      name: '',
      address: '',
      number: '',
      city: '',
      country: '',
      numberCard: '',
      validate: '',
      cvv: '',
      cpf: '',
      purchasedProducts: [],
    };
  }

  render(props) {
    const { trigger, productsInTheCart, total } = this.props;
    // const { name, address, number, city, country, numberCard, validate, cvv, cpf, purchasedProducts } = this.state;
    return (trigger && productsInTheCart) ? (
      <section className='popup'>
        <div className='popup-inner'>
          <h1>Já é quase seu!</h1>
          <h3>Preencha abaixo os dados para Entrega:</h3>
          <form>
            <input
              type="text"
              placeholder="Nome Completo:"
              onChange={ ({ target }) => this.setState({ name: target.value }) }
              />
              <br></br>
            <input
              type="text"
              placeholder="Endereço para Entrega:"
              onChange={ ({ target }) => this.setState({ address: target.value }) }
              /><br></br>
            <input
              type="text"
              placeholder="Número:"
              onChange={ ({ target }) => this.setState({ number: target.value }) }
              /><br></br>
            <input
              type="text"
              placeholder="Cidade:"
              onChange={ ({ target }) => this.setState({ city: target.value }) }
              /><br></br>
            <input
              type="text"
              placeholder="Estado"
              onChange={ ({ target }) => this.setState({ country: target.value }) }
            />
          </form>

          <h3>Dados para Pagamento:</h3>
          <form>
            <input
              type="text"
              placeholder="Número do Cartão:"
              onChange={ ({ target }) => this.setState({ numberCard: target.value }) }
              />
              <br></br>
            <input
              type="text"
              placeholder="Valido até::"
              onChange={ ({ target }) => this.setState({ validate: target.value }) }
              /><br></br>
            <input
              type="text"
              placeholder="cvv:"
              onChange={ ({ target }) => this.setState({ cvv: target.value }) }
              /><br></br>
            <input
              type="text"
              placeholder="cpf do titular do cartão:"
              onChange={ ({ target }) => this.setState({ cpf: target.value }) }
              /><br></br>
          </form>

          <div className='productsInTheCart'>
            <h3>Produtos no Carrinho:</h3>
            {productsInTheCart.map((el) => (
              <>
              <p>{ el.productName }</p>
              <img src={ el.image } alt={ el.productName } />
              <p>{ el.description }</p>
              <p>{ el.price }</p>
              </>
            ))}
            <p>Valor Total: {total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            <button>FINALIZAR COMPRA</button>
          </div>
        </div>
      </section>
    ) : '';

  }
}

export default Checklist;

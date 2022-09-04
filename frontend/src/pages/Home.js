import React from 'react';
import { getProductsFromCategory } from '../services/api';
import { FaShoppingCart } from 'react-icons/fa';
import Categories from '../components/Categories';
import Checklist from '../components/Checklist';
import { BodyProducts } from '../components/styled-components/BodyProducts';
import { NavHeader, CartShopHeader, TextSearchHeader, } from '../components/styled-components/NavHeader';
import { CardProduct, ContainerCardsProducts, Container } from '../components/styled-components/CardProduct';

class Home extends React.Component {
  constructor() {
    super();
    
    this.state = {
      listProducts: [],
      productsInTheCart: [],
      firstClickButton: false,
      newQuantity: 1,
      total: 0,
      quantity: 0,
      finishSale: false,
    };
  }

  handleButtonSelect = async ({ target }) => {
    const { value } = target;
    console.log(value.price);
    const products = await getProductsFromCategory(value);
    this.setState({ listProducts: products });
  }

  handleClick (oneOrZero, el) {
    const { firstClickButton, newQuantity, quantity, productsInTheCart } = this.state;
   
    if (!firstClickButton) {
      if (oneOrZero === 1) {
        this.setState((prevState) => ({
          firstClickButton: true, newQuantity: quantity + 1,
          productsInTheCart: [...prevState.productsInTheCart, el],
          total: prevState.total + el.price,
        }));
      } else if (oneOrZero === 0 && quantity >= 1) {
        const productRemoved = this.state.productsInTheCart.findIndex(x => x.id === el.id);
      const productsADD = [...productsInTheCart];
      productsADD.splice(productRemoved, 1);
        this.setState((prevState) => ({
          firstClickButton: true, newQuantity: quantity - 1,
          productsInTheCart: productsADD,
          total: prevState.total - el.price,
        }));
      }
    } else if (oneOrZero === 1) {
      this.setState((prevState) => ({
        firstClickButton: true, newQuantity: newQuantity + 1,
        productsInTheCart: [...prevState.productsInTheCart, el],
        total: prevState.total + el.price,
      }));
    } else if (oneOrZero === 0 && newQuantity >= 1) {
      const productRemoved = this.state.productsInTheCart.findIndex(x => x.id === el.id);
      const productsADD = [...productsInTheCart];
      productsADD.splice(productRemoved, 1);
      this.setState((prevState) => ({
        firstClickButton: true, newQuantity: newQuantity - 1,
        productsInTheCart: productsADD,
        total: prevState.total - el.price,
      }));
    }
  }

  render() {
    const { listProducts, newQuantity, firstClickButton, total, finishSale, productsInTheCart } = this.state
    const { quantity } = this.props;
    return (
      <section>
        <NavHeader>
          <p className='total'>{ total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</p>
          <TextSearchHeader>
            <BodyProducts>
              <Checklist
                trigger={finishSale}
                setTrigger={finishSale}
                productsInTheCart={productsInTheCart} 
                total={total} 
              />
              <button
                className='btn-cart'
                onClick={ () => this.setState({ finishSale: true }) }
              >
                <FaShoppingCart className="icon-cart" />
              </button>
              <CartShopHeader>
                <p data-testid="shopping-cart-size">{ firstClickButton ? newQuantity : quantity }</p>
              </CartShopHeader>
            </BodyProducts>
          </TextSearchHeader>
          {' '}
        </NavHeader>

        <Container>
          <Categories handleButtonSelect={ this.handleButtonSelect } />
          <ContainerCardsProducts>
            { listProducts.map((el) => (
              <CardProduct>
                <p className='title-product'> { el.productName } </p>
                <img src={ el.image } alt={ el.productName } />
                <p> { el.description } </p>
                <p className='value'> { el.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) } </p>

                <button
                  className="1"
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={() => this.handleClick(1, el)}
                  disabled={ newQuantity === el.quantity }
                >
                  +
                </button>
                <button
                  className="0"
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={() => this.handleClick(0, el)}
                  disabled={ newQuantity < 1 }
                >
                  -
                </button>
              </CardProduct>
              )) 
            }
          </ContainerCardsProducts>
        </Container>
      </section>
    );
  }
}

export default Home;

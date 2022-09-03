import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import {
  NavHeader,
  CartShopHeader,
  TextSearchHeader,
} from '../components/styled-components/NavHeader';
import {
  BodyProducts,
} from '../components/styled-components/BodyProducts';
import { CardProduct, ContainerCardsProducts, Container } from '../components/styled-components/CardProduct';
import { getProductsFromCategory } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    
    this.state = {
      loadProducts: '',
      listProducts: [],
      firstClickButton: false,
      newQuantity: 1,
      total: 0,
      quantity: 0,
    };
  }

  handleButtonSelect = async ({ target }) => {
    const { value } = target;
    console.log(value);
    const products = await getProductsFromCategory(value);
    this.setState({ listProducts: products });
  }

  handleChange = ({ target }) => {
    const { className } = target;
    const { firstClickButton, newQuantity, quantity } = this.state;

    if (!firstClickButton) {
      if (className === '1') {
        this.setState({ firstClickButton: true, newQuantity: quantity + 1 });
      } else if (quantity >= 1 && className === '0') {
        this.setState({ firstClickButton: true, newQuantity: quantity - 1 });
      }
    } else if (className === '1') {
      this.setState({ firstClickButton: true, newQuantity: newQuantity + 1 });
    } else if (newQuantity >= 1 && className === '0') {
      this.setState({ firstClickButton: true, newQuantity: newQuantity - 1 });
    }
  }

  render() {
    const { listProducts, newQuantity, firstClickButton, total } = this.state
    const { quantity } = this.props;
    return (
      <section>
        <NavHeader>
          <TextSearchHeader>
            <BodyProducts>
              <FaShoppingCart className="icon-cart" />
              <CartShopHeader>
                <Link
                  data-testid="shopping-cart-button"
                  to="/ShoppingCart"
                >
                  <p data-testid="shopping-cart-size">{ firstClickButton ? newQuantity : quantity }</p>
                </Link>
              </CartShopHeader>
            </BodyProducts>
          </TextSearchHeader>
          {' '}
        </NavHeader>
        <Container>
          <div>
            <Categories handleButtonSelect={ this.handleButtonSelect } />
          </div>
          <p>{ total }</p>
          <ContainerCardsProducts>
            { listProducts.map((el) => (
              <CardProduct>
                <p> { el.productName } </p>
                <img src={ el.image } alt={ el.productName } />
                <p> { el.description } </p>
                <p className='value'> { el.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) } </p>

                <button
                  className="1"
                  type="button"
                  value={ el.price }
                  data-testid="product-increase-quantity"
                  onClick={ this.handleChange }
                  disabled={ newQuantity === el.quantity }
                >
                  +
                </button>
                <button
                  className="0"
                  value={ el.price }
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ this.handleChange }
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

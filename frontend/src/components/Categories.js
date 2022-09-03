import React from 'react';
import { getCategories } from '../services/api';
import { SideBarCategories } from './styled-components/SideBarCategories';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categoriesResult = await getCategories();
    this.setState({
      categories: categoriesResult,
    });
  }

  render() {
    const { categories } = this.state;
    const { handleButtonSelect } = this.props;
    return (
      <section className="container-categories">
        <SideBarCategories><h1>CATEGORIAS</h1></SideBarCategories>
        { categories.map((el) => (
          <label
            key={ el.id }
            htmlFor={ el.id }
          >
            <SideBarCategories>
              <input
                data-testid="category"
                type="radio"
                name="select"
                value={ el.nameCategory }
                id={ el.id }
                onChange={ handleButtonSelect }
              />
              {el.nameCategory}
            </SideBarCategories>
          </label>)) }
      </section>
    );
  }
}

export default Categories;

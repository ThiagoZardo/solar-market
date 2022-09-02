import ProductsModel from '../database/models/products.model';
import IListProducts from '../interfaces/IProducts';
import CategoryModel from '../database/models/categories.model';

export default class ProductsService implements IListProducts<ProductsModel> {
  constructor(private productsModel = ProductsModel) {}

  async listAll(): Promise<ProductsModel[]> {
    const products = await this.productsModel.findAll({
      include: [
        { model: CategoryModel, as: 'categoryInfo' },
      ],
    });
    return products;
  }

  async searchCategory(category: string): Promise<ProductsModel[]> {
    const searchCategory = await this.productsModel.findAll({
      where: { nameCategory: category },
    });
    return searchCategory;
  }
}

import CategoryModel from '../database/models/categories.model';
import ICategories from '../interfaces/ICategories';

export default class CategoriesService implements ICategories<CategoryModel> {
  constructor(private categoryModel = CategoryModel) {}

  async listAllCategories(): Promise<CategoryModel[]> {
    const categories = await this.categoryModel.findAll({});
    return categories;
  }
}

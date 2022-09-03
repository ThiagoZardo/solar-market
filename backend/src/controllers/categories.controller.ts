import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import CategoriesModel from '../database/models/categories.model';
import ICategories from '../interfaces/ICategories';

export default class CategoriesController {
  constructor(private categoryService: ICategories<CategoriesModel>) {}

  async listAllCategories(req: Request, res: Response) {
    const categories = await this.categoryService.listAllCategories();
    return res.status(StatusCodes.OK).json(categories);
  }
}

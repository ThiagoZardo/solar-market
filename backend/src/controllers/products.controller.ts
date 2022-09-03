import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsModel from '../database/models/products.model';
import IListProducts from '../interfaces/IProducts';

export default class ProductsController {
  constructor(private productsService: IListProducts<ProductsModel>) {}

  async listAll(req: Request, res: Response) {
    const category = req.query.search as string;
    if (category) {
      const search = await this.productsService.searchCategory(category);
      if (!search || search.length === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'Not Found' });
      }
      return res.status(StatusCodes.OK).json(search);
    }
    const products = await this.productsService.listAll();
    if (!products || products.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Not Found' });
    }
    return res.status(StatusCodes.OK).json(products);
  }
}

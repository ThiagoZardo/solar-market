import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import ProductsService from '../services/products.service';

const productsService = new ProductsService();
const productsController = new ProductsController(productsService);

const routerProducts = Router();

routerProducts.get('/', (req, res) => productsController.listAll(req, res));

export default routerProducts;

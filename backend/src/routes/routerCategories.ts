import { Router } from 'express';
import CategoriesController from '../controllers/categories.controller';
import CategoriesService from '../services/categories.service';

const categoriesService = new CategoriesService();
const categoriesController = new CategoriesController(categoriesService);

const routerCategories = Router();

routerCategories.get('/', (req, res) => categoriesController.listAllCategories(req, res));

export default routerCategories;

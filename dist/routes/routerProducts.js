"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = __importDefault(require("../controllers/products.controller"));
const products_service_1 = __importDefault(require("../services/products.service"));
const productsService = new products_service_1.default();
const productsController = new products_controller_1.default(productsService);
const routerProducts = (0, express_1.Router)();
routerProducts.get('/', (req, res) => productsController.listAll(req, res));
exports.default = routerProducts;

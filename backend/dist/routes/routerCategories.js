"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_controller_1 = __importDefault(require("../controllers/categories.controller"));
const categories_service_1 = __importDefault(require("../services/categories.service"));
const categoriesService = new categories_service_1.default();
const categoriesController = new categories_controller_1.default(categoriesService);
const routerCategories = (0, express_1.Router)();
routerCategories.get('/', (req, res) => categoriesController.listAllCategories(req, res));
exports.default = routerCategories;

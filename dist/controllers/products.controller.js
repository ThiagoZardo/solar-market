"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = req.query.search;
            if (category) {
                const search = yield this.productsService.searchCategory(category);
                if (!search || search.length === 0) {
                    return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'Not Found' });
                }
                return res.status(http_status_codes_1.StatusCodes.OK).json(search);
            }
            const products = yield this.productsService.listAll();
            if (!products || products.length === 0) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'Not Found' });
            }
            return res.status(http_status_codes_1.StatusCodes.OK).json(products);
        });
    }
}
exports.default = ProductsController;

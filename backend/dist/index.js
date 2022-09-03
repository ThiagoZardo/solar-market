"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const middlewareErrors_1 = __importDefault(require("./middlewareErrors"));
const routerProducts_1 = __importDefault(require("./routes/routerProducts"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.API_PORT || 8000;
app.use('/category', routerProducts_1.default);
app.use('/', routerProducts_1.default);
app.use(middlewareErrors_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_index_1 = require("./db_index");
const cors = require('cors');
const USER = "admin";
const PWD = "admin";
const port = '6000';
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(cors());
const initBackend = () => __awaiter(void 0, void 0, void 0, function* () {
    app.get('/api/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Test working");
        let dbList = yield (0, db_index_1.useDb)(USER, PWD, db_index_1.listDatabases);
        console.log(dbList);
        res.send(dbList);
    }));
    app.listen(port, () => {
        console.log(`[server]: Server is running at https://localhost:${port}`);
    });
});
initBackend();

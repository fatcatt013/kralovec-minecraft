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
exports.useDb = exports.listDatabases = void 0;
const { MongoClient } = require('mongodb');
function listDatabases(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let databasesList = yield client.db().admin().listDatabases();
        return databasesList.databases;
    });
}
exports.listDatabases = listDatabases;
;
function useDb(USER, PWD, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = `mongodb://${USER}:${PWD}@localhost/kralovec-minecraft`;
        const client = new MongoClient(uri);
        try {
            yield client.connect((err) => {
                if (err) {
                    console.log("DB ERROR: \n\n\n\n");
                    console.log(err);
                }
            });
            let list = yield cb(client);
            return list;
        }
        catch (e) {
            console.error(e);
        }
    });
}
exports.useDb = useDb;

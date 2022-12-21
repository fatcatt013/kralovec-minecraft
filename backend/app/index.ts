import express from 'express';
import dotenv from 'dotenv';
import { listDatabases,  useDb } from './db_index';
const cors = require('cors');

const USER: string = "admin";
const PWD: string = "admin";
const port: string = '6000';

const app = express();

dotenv.config();
app.use(cors());

const initBackend = async () => {

  app.get('/api/', async (req, res) => {
    console.log("Test working")
    let dbList = await useDb(USER, PWD, listDatabases);
    console.log(dbList);
    res.send(dbList);
  });
  
  app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });
}

initBackend();
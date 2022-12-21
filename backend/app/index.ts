import express from 'express';
import dotenv from 'dotenv';
import { main } from './db_index'

const USER: string = "admin";
const PWD: string = "admin";

main(USER, PWD).catch(console.error);
 
dotenv.config();

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
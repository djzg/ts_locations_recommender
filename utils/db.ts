// Setting up a database access using PG Connector
import { Database, PostgresConnector } from 'denodb';
import config from './config.ts'; 
import models from '../models/index.ts';

// Setting up connection
const connector = new PostgresConnector(config.db);

// Creating new database
const db = new Database(connector);

db.link(models);


export default () => {
  db.sync({
    drop: config.environment === 'development',
  });
};
import { DataSource } from 'typeorm';

const db = new DataSource({
  type: 'sqlite',
  database: 'broadcaster.db',
  entities: ['entities/*.js']
});

export default db;

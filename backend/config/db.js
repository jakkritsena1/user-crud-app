const { Pool } = require('pg');

const db_pg = new Pool({
  user: 'localhost',
  host: 'dpg-d1cgeq15pdvs73eqvlkg-a.singapore-postgres.render.com',
  database: 'user_crud_app',
  password: 'nsnmJSeBFSpznq4SN0YcBxKAI0ji9LkE',
  port: 5432, 
  ssl: {
    rejectUnauthorized: false    
  }
}); 

module.exports = db_pg;

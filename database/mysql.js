import { Sequelize} from "sequelize";

import pg from 'pg';

const mysql = new Sequelize({
      dialect: 'postgres',
      dialectModule: pg,
      host: 'localhost',
      port: '3306',
      database: 'lojaacademia_ana',
      username: 'root',
      password: 'root'
});

/*import mysql2 from 'mysql2';

const mysql = new Sequelize({
      dialect: 'mysql',
      dialectModule: mysql2,
      host: 'localhost',
      port: '3306',
      database: 'lojaacademia_ana',
      username: 'root',
      password: 'root'
});*/

export default mysql;

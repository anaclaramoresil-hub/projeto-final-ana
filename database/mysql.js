import { Sequelize} from "sequelize";

import pg from 'pg';

const mysql = new Sequelize({
      dialect: 'postgres',
      dialectModule: pg,
      host: 'dpg-d4oubemr433s73d6vctg-a',
      port: '5432',
      database: 'loja_da_ana',
      username: 'loja_da_ana_user',
      password: 'hmxkqqYrpCX4TaYcVmvT2n2nhCmao5CE'
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

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * 
 *
 */
const {knexSnakeCaseMappers}=require("objection");


module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  development: {
    client: 'pg',
    connection: {
      database: 'foodcourt',
      user: null,
      password: null,
      host:'localhost',
      port:5432
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
  
  ...knexSnakeCaseMappers,

  }
}

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }



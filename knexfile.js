// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // db driver
    connection: { // could be an object or a string
    filename: './data/produce.db3'
    }, 
    useNullAsDefault: true, // only needed for SQLite
},

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// npm i -g knex --> to globally install knex
// knex init
// move the object form the connection.js file into the development property on knexfile.js

// update connection to require knexfile and use the development property as a the knexfile
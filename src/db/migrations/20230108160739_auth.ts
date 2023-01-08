//import * as Knex from 'knex';
import { knex, Knex } from 'knex';

const tableName = 'auths';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets auto-incremented
    t.increments("id").primary();
    t.string("email").notNullable();
    t.string("password").notNullable();
    t.string("role").notNullable();
    t.string("surname").notNullable();
    t.string("otherNames").notNullable();
    t.timestamps(true,true);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}

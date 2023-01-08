import { knex, Knex } from 'knex';

const tableName = 'categorys';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets auto-incremented
    t.increments("id").primary();
    t.string("name").notNullable();
    t.timestamps(true,true);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}

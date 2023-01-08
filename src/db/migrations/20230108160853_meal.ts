import { knex, Knex } from 'knex';

const tableName = 'meals';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets autoincremented
    t.increments("id").primary();
    t.string("name").notNullable();
    t.string("description").notNullable();
    t.string("price").notNullable();
    t.integer("categoryId").notNullable().references("id").inTable("categorys");
    t.integer("brandId").notNullable().references("id").inTable("brands");
    t.timestamps(true,true);

  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}

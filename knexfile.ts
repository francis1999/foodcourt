
import 'dotenv/config';
//import * as Knex from 'knex';
import { knex, Knex } from 'knex';

import {knexSnakeCaseMappers} from "objection";

module.exports = {
            client:'pg',
            connection:process.env.DATABASE_URL,
            migrations:{
              directory:'./src/db/migrations',
              stub:'./src/db/migration.stub',
            },
            seeds:{
              directory:'.src/db/seeds',
              stub:'.src/db/seed.stub',
            },
            ...knexSnakeCaseMappers()

} as Knex.Config;

  
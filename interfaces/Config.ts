import { PostgresOptions } from 'https://deno.land/x/denodb/mod.ts';


export default interface Config {
  environment: string;
  db: PostgresOptions;
}
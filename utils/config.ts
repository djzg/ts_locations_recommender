import "https://deno.land/x/dotenv/load.ts";
import Config from "../interfaces/Config.ts";



// defining db variables
const config: Config = {
  environment: Deno.env.get('DENO_ENV') || '',
  db: {
    database: Deno.env.get('DB_NAME') || '',
    host: Deno.env.get('DB_HOST') || '',
    username: Deno.env.get('DB_USERNAME') || '',
    password: Deno.env.get('DB_PASSWORD') || '',
    port: Number(Deno.env.get('DB_PORT') || 5432), // optional
  }
}

console.log(config);


// getting all db config entries and checking if there are empty values
Object.entries(config.db).forEach(([name, value]) => {
  if (!value) {
    throw new Error('Missing db config value: ' + name);
  }
});

export default config;

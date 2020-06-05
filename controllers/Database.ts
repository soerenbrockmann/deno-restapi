import { Database } from 'https://deno.land/x/denodb/mod.ts';
import { User } from './models/User.ts';

export class DatabaseController {
  client: Database;

  constructor() {
    this.client = new Database('sqlite3', {
      filepath: Deno.realPathSync('./controllers/database/db.sqlite'),
    });
  }

  async initModels() {
    this.client.link([User]);
    await this.client.sync({});
  }
}

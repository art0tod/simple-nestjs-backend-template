import { ConnectionOptions } from 'typeorm';
import { DATABASE, DATABASE_PASSORD, DATABASE_USER } from './config';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: DATABASE_USER,
  password: DATABASE_PASSORD,
  database: DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;

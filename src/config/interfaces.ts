export interface IDatabaseCredentials {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  type: 'postgres' | 'mysql' | 'mssql';
}

export interface IDatabaseCredentials {
  host: string;
  port: number;
  username: string;
  password: string;
  schema: string;
  type: 'postgres' | 'mysql' | 'mssql';
}

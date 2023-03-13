import { TypeOrmModule } from '@nestjs/typeorm';

export const configModuleTestingDb = (entities): Array<any> => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    entities: entities,
    synchronize: true,
    autoLoadEntities: true,
  }),
  TypeOrmModule.forFeature(entities),
];

// regular expretion for search fixtures    .*\/.*\.fixture\.ts

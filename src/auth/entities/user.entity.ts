import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 300,
    nullable: false,
  })
  password: string;

  @Column()
  type: 'citizen' | 'admin' | 'customer';
}

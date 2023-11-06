import 'moment-timezone';
import * as moment from 'moment';
import { Gander, RowsStatus } from 'src/config';
import { Order, Favorite, Karzinka, LastSeen } from '.';
import {
  Index,
  Entity,
  Column,
  OneToMany,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];

  @OneToMany(() => LastSeen, (lastSeen) => lastSeen.user)
  last_seens: LastSeen[];

  @OneToMany(() => Karzinka, (karzinka) => karzinka.user)
  karzinka: Karzinka[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @Column({ type: 'int' })
  cargo_id: number;

  @Column({ type: 'int', nullable: true })
  address: number;

  @Column({ type: 'varchar', default: 'user' })
  role: string;

  @Column({ type: 'varchar' })
  first_name: string;

  @Column({ type: 'varchar' })
  last_name: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  number: string;

  @Column({ type: 'varchar', nullable: true })
  image: string;

  @Column({ type: 'enum', enum: Gander, nullable: true })
  gander: Gander;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  birthday: string;

  @Column({ type: 'date', nullable: true })
  last_login: Date;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

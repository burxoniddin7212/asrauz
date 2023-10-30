import 'moment-timezone';
import { News, Order } from '.';
import * as moment from 'moment';
import { RolesNamesOnlyAdmin, RowsStatus } from 'src/config';
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

@Entity({ name: 'admin' })
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn()
  admin_id: number;

  @OneToMany(() => News, (news) => news.admin)
  news: News[];

  @OneToMany(() => Order, (order) => order.admin)
  orders: Order[];

  @Column({
    type: 'enum',
    enum: RolesNamesOnlyAdmin,
    default: RolesNamesOnlyAdmin.admin,
  })
  role: RolesNamesOnlyAdmin;

  @Column({ type: 'varchar' })
  first_name: string;

  @Column({ type: 'varchar' })
  last_name: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  number: string;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

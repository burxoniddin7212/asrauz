import 'moment-timezone';
import * as moment from 'moment';
import { Admin, User } from '.';
import { OrdersStatus, RowsStatus } from 'src/config';
import {
  Index,
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'order' })
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user' })
  user: User;

  @ManyToOne(() => Admin, (admin) => admin.orders)
  @JoinColumn({ name: 'admin' })
  admin: Admin;

  @Column({ type: 'int' })
  cargo_id: number;

  @Column({ type: 'bigint' })
  product_id: string;

  @Column({ type: 'bigint' })
  price: string;

  @Column({ type: 'bigint' })
  original_price: string;

  @Column({ type: 'bigint' })
  count: string;

  @Column({ type: 'text' })
  characteristics: string;

  @Column({ type: 'jsonb' })
  percentages: Record<string, string>;

  @Column({ type: 'text' })
  detail_url: string;

  @Column({ type: 'text' })
  image: string;

  @Column({ type: 'varchar', nullable: true })
  tracking_number: string;

  @Column({ type: 'date', nullable: true })
  tracking_number_date: Date;

  @Column({ type: 'enum', enum: OrdersStatus, default: OrdersStatus.received })
  order_status: OrdersStatus;

  @Column({ type: 'date', nullable: true })
  order_received_date: Date;

  @Column({ type: 'date', nullable: true })
  order_confirmed_date: Date;

  @Column({ type: 'date', nullable: true })
  order_ordered_date: Date;

  @Column({ type: 'date', nullable: true })
  order_ordered_statistics_date: Date;

  @Column({ type: 'date', nullable: true })
  order_has_arrived_date: Date;

  @Column({ type: 'date', nullable: true })
  order_was_canceled_date: Date;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

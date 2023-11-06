import 'moment-timezone';
import * as moment from 'moment';
import { User } from '.';
import { RowsStatus } from 'src/config';
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

@Entity({ name: 'karzinka' })
export class Karzinka extends BaseEntity {
  @PrimaryGeneratedColumn()
  karzinka_id: number;

  @ManyToOne(() => User, (user) => user.karzinka)
  @JoinColumn({ name: 'user' })
  user: User;

  @Column({ type: 'bigint' })
  product_id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'varchar' })
  price: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'bigint' })
  count: string;

  @Column({ type: 'text' })
  characteristics: string;

  @Column({ type: 'text' })
  detail_url: string;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

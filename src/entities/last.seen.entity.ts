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

@Entity({ name: 'last_seen' })
export class LastSeen extends BaseEntity {
  @PrimaryGeneratedColumn()
  last_seen_id: number;

  @Column()
  @ManyToOne(() => User, (user) => user.last_seens)
  @JoinColumn({ name: 'user_id' })
  user: number;

  @Column({ type: 'bigint' })
  product_id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'varchar' })
  price: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

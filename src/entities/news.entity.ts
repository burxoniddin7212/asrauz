import 'moment-timezone';
import * as moment from 'moment';
import { Admin } from '.';
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

@Entity({ name: 'news' })
export class News extends BaseEntity {
  @PrimaryGeneratedColumn()
  news_id: number;

  @ManyToOne(() => Admin, (admin) => admin.news)
  @JoinColumn({ name: 'admin' })
  admin: Admin;

  @Column({ type: 'jsonb' })
  title: Record<string, string>;

  @Column({ type: 'jsonb' })
  text: Record<string, string>;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

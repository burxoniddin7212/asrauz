import 'moment-timezone';
import * as moment from 'moment';
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

@Entity({ name: 'sms' })
export class Sms extends BaseEntity {
  @PrimaryGeneratedColumn()
  sms_id: number;

  @Column({ type: 'varchar' })
  recipient: string;

  @Column({ type: 'varchar' })
  text: string;

  @Column({ type: 'varchar' })
  content: string;

  @Column({ type: 'varchar' })
  sms_status: string;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

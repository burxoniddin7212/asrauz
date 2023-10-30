import 'moment-timezone';
import * as moment from 'moment';
import { RowsStatus } from 'src/config';
import {
  Index,
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'percentage' })
export class Percentage extends BaseEntity {
  @PrimaryGeneratedColumn()
  percentage_id: number;

  @Column({ type: 'jsonb' })
  percentage: Record<string, string>;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

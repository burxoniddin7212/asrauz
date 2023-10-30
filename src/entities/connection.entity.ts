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

@Entity({ name: 'connection' })
export class Connection extends BaseEntity {
  @PrimaryGeneratedColumn()
  connection_id: number;

  @Column({ type: 'text' })
  text: string;

  @Column({ type: 'boolean', default: false })
  connected: boolean;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

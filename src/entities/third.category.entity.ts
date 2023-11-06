import 'moment-timezone';
import * as moment from 'moment';
import { SubCategory } from '.';
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

@Entity({ name: 'third_category' })
export class ThirdCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  third_category_id: number;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.third_categories)
  @JoinColumn({ name: 'sub_category' })
  sub_category: SubCategory;

  @Column({ type: 'jsonb' })
  name: Record<string, string>;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'enum', enum: RowsStatus, default: RowsStatus.active })
  status: RowsStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

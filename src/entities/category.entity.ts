import 'moment-timezone';
import * as moment from 'moment';
import { SubCategory } from '.';
import { RowsStatus } from 'src/config';
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

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  category_id: number;

  @OneToMany(() => SubCategory, (sub_category) => sub_category.category)
  sub_categories: SubCategory[];

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

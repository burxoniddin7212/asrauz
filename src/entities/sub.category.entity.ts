import 'reflect-metadata';
import 'moment-timezone';
import * as moment from 'moment';
import { RowsStatus } from 'src/config';
import { ThirdCategory, Category } from '.';
import {
  Index,
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'sub_category' })
export class SubCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  sub_category_id: number;

  @Column()
  @ManyToOne(() => Category, (category) => category.sub_categories)
  @JoinColumn({ name: 'category' })
  category: Category;

  @OneToMany(
    () => ThirdCategory,
    (third_category) => third_category.sub_category,
  )
  third_categories: ThirdCategory[];

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

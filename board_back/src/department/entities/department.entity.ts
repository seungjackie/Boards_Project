import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  uid_deaprtment: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  sdt: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  ngtt: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  mst: string;
}

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
export class File {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  uId_file: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  fName: string;
}

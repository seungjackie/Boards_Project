import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class File {
  @PrimaryColumn({ type: 'varchar', length: '7' })
  @Field(() => String)
  fileNum: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  fileName: string;
}

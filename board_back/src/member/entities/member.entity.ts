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
export class Member {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  uId_member: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  mId: string;

  @Column({ type: 'varchar' })
  @Field(() => String)
  mPw: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  mName: string;

  @CreateDateColumn()
  createdAt: Date;
}

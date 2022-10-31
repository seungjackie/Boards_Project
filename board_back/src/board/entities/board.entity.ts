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
export class Board {
  @PrimaryColumn({ type: 'varchar', length: '7' })
  @Field(() => String)
  boardNum: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  title: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  contents: string;

  @Column({ type: 'int', default: '0' })
  @Field()
  cnt: number;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  createTime: Date;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  userNum: string;

  @Column({ type: 'varchar', length: '255', nullable: true })
  @Field(() => String)
  fileNum: string;

  // !todo 작성자
  // userName

  // !todo 파일
  // deptName
}

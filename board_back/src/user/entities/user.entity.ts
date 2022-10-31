import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  PrimaryColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn({ type: 'varchar', length: '7' })
  @Field(() => String)
  userNum: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  userId: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  userPw: number;

  @Column({ type: 'varchar', length: '50' })
  @Field(() => String)
  userName: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  deptCode: string;

  // @Column({ type: 'varchar' })
  // @Field()
  // dName: string;
  // deptName: string;

  // // 해당 엔티티 to 대상 엔티티(department) 여러유저는 하나의 부서명에서 받겠다.
  // @ManyToOne(() => Department, (department) => department.dName)
  // @JoinColumn({ name: 'uId_department' }) // 코드 uid를 통해 dName을 가져오겠다.
  // department: Department['dName'];
}

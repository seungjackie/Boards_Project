import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
@ObjectType()
export class Department {
  @PrimaryColumn({ type: 'varchar', length: '7' })
  @Field(() => String)
  deptCode: string;

  @Column({ type: 'varchar', unique: true })
  @Field(() => String)
  deptName: string;

  // 해당 엔티티에서 대상 엔티티로 보내주겠다.
  // @OneToMany(() => User, (user) => user.department) // 멤버에 부서명을 보내겠다.
  // user: User[]; // entity접근
}

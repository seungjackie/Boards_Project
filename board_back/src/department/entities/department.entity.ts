import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Member } from 'src/member/entities/member.entity';

@Entity({
  // synchronize: false, // 설정할 시 스키머 싱크를 건너뜀
})
@ObjectType()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  uId_department: string;

  @Column({ type: 'varchar', unique: true })
  @Field(() => String)
  dName: string;

  // 해당 엔티티에서 대상 엔티티로 보내주겠다.
  // @OneToMany(() => Member, (member) => member.department) // 멤버에 부서명을 보내겠다.
  // member: Member[]; // entity접근
}

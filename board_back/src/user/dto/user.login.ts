import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
// type 통일성
export class LoginInput {
  @Column({ length: 255 })
  @Field(() => String, { nullable: true })
  LoginInputId: string;

  @Column({ length: 4 })
  @Field(() => String, { nullable: true })
  LoginInputPw: string;
}

import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: '사번' })
  userNum: string;

  @Field(() => String, { description: '유저 Id' })
  userId: string;

  @Field(() => String, { description: '유저 패스워드' })
  userPw: string;

  @Field(() => String, { description: '유저 이름' })
  userName: string;

  @Field(() => String, { description: '유저 이름' })
  deptCode: string;

  // @Field(() => String, { description: ' 부서명' })
  // dName: string;
}

export class CreateUserDto {
  userId: string;
  email: string;
  name: string;
  password: string;
}
export default CreateUserDto;

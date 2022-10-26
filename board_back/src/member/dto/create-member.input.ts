import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMemberInput {
  @Field(() => String, { description: '멤버 아이디' })
  mId: string;

  @Field(() => Int, { description: '멤버 비밀번호' })
  mPw: number;

  @Field(() => String, { description: '멤버 이름' })
  mName: string;

  // @Field(() => String, { description: ' 부서명' })
  // dName: string;
}

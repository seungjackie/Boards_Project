import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  // length 정해주기 input 에서도 length 정해 주기
  @Field(() => String, { description: '타이틀 : ' })
  title: string;

  @Field(() => String, { description: ' 본문 내용' })
  contents: string;

  @Field(() => String, { description: ' 본문 내용' })
  userNum: string;

  // @Field(() => String, { description: ' 본문 내용' })
  // fileNum: string;
}

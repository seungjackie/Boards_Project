import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field(() => String, { description: '타이틀 : ' })
  title: string;

  @Field(() => String, { description: ' 본문 내용' })
  contents: string;
}
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFileInput {
  @Field(() => String, { description: '사번' })
  fileNum: string;

  @Field(() => String, { description: 'FILE 이름' })
  fileName: string;
}

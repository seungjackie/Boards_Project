import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field(() => String, { description: '서비스 개발 팀 :' })
  sdt: string;

  @Field(() => String, { description: '신성장 기술팀 :' })
  ngtt: string;

  @Field(() => String, { description: '경영 지원부 : ' })
  mst: string;
}

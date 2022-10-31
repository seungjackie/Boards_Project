import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field(() => String, { description: '부서 코드' })
  deptCode: string;

  @Field(() => String, { description: ' 개발팀 ' })
  deptName: string;
}

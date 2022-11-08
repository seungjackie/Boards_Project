import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BoardAllCount {
  @Field(() => Number)
  count: number;
}

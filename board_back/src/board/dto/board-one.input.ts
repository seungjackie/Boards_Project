import { Field, InputType, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class BoardOneInput {
  @Column()
  @Field(() => Int, { nullable: true })
  boardSetNum: number;
}

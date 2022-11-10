// import { Field, InputType } from '@nestjs/graphql';
// import { Int } from '@nestjs/graphql';
// import { Column } from 'typeorm';

// @InputType()
// export class BoardOneInput {
//   @Column()
//   @Field(() => Int)
//   boardSetNum: number;
// }

import { Field, InputType, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';
// import { Int } from 'type-graphql';

@InputType()
export class BoardOneInput {
  @Column()
  @Field(() => Int, { nullable: true })
  boardSetNum: number;
}

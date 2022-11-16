import { IsNumber, Min, IsOptional, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ArgsType, Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateBoardInput } from './create-board.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from '../entities/board.entity';

@InputType()
@ArgsType()
// createboardinput 종속을 한다.
/* extends InjectRepository(Board: title) */
export class BoardAllInput {
  // 유효성 검사
  @IsOptional() // undefined을 받을수 있으면서 IsString or isNumber로 타입 체크
  @Min(0) // 0부터 시작?
  @Field(() => Int)
  // !Todo 넘버로 할시 에러
  page: number;

  @IsOptional()
  // @Type(() => Number)
  @IsNumber()
  // @Min(1)
  // @Max(20)
  @Field(() => Int)
  // !Todo number 로 할시 에러
  limit: number;

  // @Field(() => Boolean)
  // ok: boolean;

  // @Field(() => Int)
  // @Min(0)
  // skip = 0;

  // @Field(() => Int)
  // @Min(1)
  // @Max(50)
  // take = 25;

  // @Field(() => Number)
  // count: number;
}

import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateBoardInput } from './create-board.input';

@InputType()
class UpdateBoardInputType extends PartialType(CreateBoardInput) {}

@InputType()
export class UpdateBoardDto {
  @Field((type) => Int)
  boardNum: number;

  @Field((type) => UpdateBoardInputType)
  data: UpdateBoardInputType;
}

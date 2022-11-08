import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { CreateBoardInput } from './create-board.input';

@InputType()
export class UpdateBoardInput extends PartialType(CreateBoardInput) {
  @Column({ length: 255 })
  @Field(() => String)
  EditBoardTitle: string;

  @Column({ length: 255 })
  @Field(() => String)
  EditBoardContents: string;
}

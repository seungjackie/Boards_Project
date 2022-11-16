import { Field, InputType, PickType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { CreateUserInput } from './create-user.input';

@InputType()
export class FindOneUserInput extends PickType(CreateUserInput, [
  'userId',
] as const) {}

import { Injectable } from '@nestjs/common';
import { InputType, IntersectionType } from '@nestjs/graphql';
import { BoardAllCount } from './board-all.count.input';
import { BoardAllInput } from './board-all.input';

@InputType()
export class BoardAllInter extends IntersectionType(
  BoardAllCount,
  BoardAllInput,
) {}

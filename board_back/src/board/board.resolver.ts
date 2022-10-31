import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation(() => Board)
  createBoard(@Args('createBoardInput') createBoardInput: CreateBoardInput) {
    return this.boardService.create(createBoardInput);
  }

  @Query(() => [Board], { name: 'boardAll' })
  findAll() {
    return this.boardService.findAll();
  }

  @Query(() => Board, { name: 'boardOne' })
  findOne(@Args('boardNum', { type: () => String }) boardNum: string) {
    return this.boardService.findOne(boardNum);
  }
}

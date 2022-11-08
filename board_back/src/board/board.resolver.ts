import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { BoardAllInput } from './dto/board-all.input';
import { BoardAllOutput } from './dto/board.output';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation(() => Board)
  createBoard(@Args('createBoardInput') createBoardInput: CreateBoardInput) {
    return this.boardService.create(createBoardInput);
  }

  // @Query(() => [Board], { name: 'boardAll' })
  // findAll() {
  //   return this.boardService.findAll();
  // }

  @Query(() => Board, { name: 'boardOne' })
  findOne(@Args('boardNum', { type: () => String }) boardNum: string) {
    return this.boardService.findOne(boardNum);
  }

  @Query(() => Number, { name: 'count' })
  async getCountR(): Promise<number> {
    return this.boardService.getCount();
  }

  // @Query(() => [Board], { name: 'boards' })
  // async findAl(@Args() args: BoardAllInput): Promise<Board[]> {
  //   return this.boardService.findAll();
  // }
  @Query(() => Board, { name: 'boards' })
  async findAll(
    @Args('boards') boarAllInput: BoardAllInput, // : Promise<Board >
  ) {
    return this.boardService.findAllBoard(boarAllInput);
  }

  // @Query(() => String, { name: 'searchs' })
  // getAllPosts(@Args('searchs') { offset, limit }: PaginationParams) {
  //   if ('searchs') {
  //     console.log('aaa');
  //   }
  //   this.boardService.getAllPosts(offset, limit);
  // }

  // @Query(() => )

  // @Mutation(() => Board, { name: 'boardEdit' })

  // @Mutation(() => Boolean, { name: 'userCheck' })
  // login(@Args('loginInput') loginInput: LoginInput) {
  //   // LoginInput으로 데이터 확인
  //   return this.userService.login(loginInput);
  // }
}

import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ArgsType,
  ID,
} from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { BoardAllInput } from './dto/board-all.input';
import { BoardAllInter } from './dto/board.inter';
import { UpdateBoardDto } from './dto/board-update';
import { BoardOneInput } from './dto/board-one.input';

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

  // 전체 개수
  @Query(() => Number, { name: 'count' })
  async getCountR(): Promise<number> {
    return this.boardService.getCount();
  }

  // 찾기
  // @Query(() => Board, { name: 'findAllBoards' })
  // async findAllBoard_resolver(@Args('boards') boarAllInput: BoardAllInput) {
  //   return this.boardService.findAllBoard_service(boarAllInput);
  // }

  // test
  @Query((returns) => Boolean)
  async findAllBoard_resolver(
    @Args('boards') boarAllInput: BoardAllInput,
  ): Promise<boolean> {
    try {
      await this.boardService.findAllBoard_service(boarAllInput);
      return true;
      // return await this.boardService.findAllBoard_service(boarAllInput);
      // return await this.boardService.findAllBoard_service(boarAllInput);
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  // @Query((returns) => Board)
  // async findAllBoard_resolver(
  //   @Args('boards') boarAllInput: BoardAllInput,
  // ) /* : Promise<number> */ {
  //   try {
  //     // const a = this.boardService.findAllBoard_service(boarAllInput);
  //     // const b = a as unknown as string;
  //     const a = await this.boardService.findAllBoard_service(boarAllInput);
  //     console.log(a, 'aaa<<');
  //     // 리턴 값이 안 뜬다..
  //     return await this.boardService.findAllBoard_service(boarAllInput);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // update
  @Mutation((returns) => Boolean)
  async updateBoard(
    @Args('input') updateBoardDto: UpdateBoardDto,
  ): Promise<boolean> {
    try {
      await this.boardService.updateBoard(updateBoardDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  // 게시물 찾기
  @Query((returns) => Board)
  async findBoardOne(
    @Args({ name: 'id', type: () => ID }) id: string,
  ): Promise<Board> {
    return await this.boardService.findOneBoard(parseInt(id));
  }

  // 게시물 삭제
  @Mutation(() => String, { name: 'delete' })
  async deleteBoard(
    @Args({ name: 'id', type: () => ID }) id: string,
  ): Promise<boolean> {
    return this.boardService.deleteBoard(parseInt(id));
  }

  // @Mutation(() => Boolean)
  // async deleteBoardOne(@Args('id') id: number): Promise<Boolean> {
  //   return await this.boardService.deleteBoard(id);
  // }

  // @Query(() => Number, { name: 'boardOne' })
  // async findOne(
  //   @Args('input') boardOneInputType: BoardOneInputType,
  // ): Promise<number> {
  //   try {
  //     await this.boardService.findOne(boardOneInputType);

  //   } catch (e) {
  //     console.log(e);
  //     return false;
  //   }
  // }

  // @Query(() => Board, { name: 'boardOne' })
  // findOne(@Args('boardOneInput') boardOneInput: BoardOneInput) {
  //   return this.boardService.findOne(boardOneInput);
  // }

  // todo
  // @Query(() => Board, { name: 'boardOne' })
  // findOne(@Args('boardOneInput') boardOneInput: BoardOneInput) {
  //   return this.boardService.findOne(boardOneInput);
  // }

  // @Query((type) => [Board], { name: 'findOne' })
  // findBoardOneTest(
  //   @Args('boardOneInput') boardOneInputType: BoardOneInputType,
  // ) {
  //   console.log(this.boardService.findOneBoard(boardOneInputType));
  //   return this.boardService.findOneBoard(boardOneInputType);
  // }

  // @Query(() => Number, { name: 'boardFindOneInput' })
  // async findOne(
  //   @Args('input') boardOneInput: BoardOneInputType,
  // ): Promise<Board> {
  //   // console.log(boardOneInput)
  //   try {
  //     return await this.boardService.findOneBoard(boardOneInput);
  //   } catch (e) {
  //     console.log(e);
  //     return;
  //   }
  // }

  // @Query(() => Board, { name: 'findtest' })
  // findOneTest(@Args('findtest') boardOneInputType: BoardOneInputType) {
  //   console.log(this.boardService.findOneBoard(boardOneInputType));
  //   return this.boardService.findOneBoard(boardOneInputType);
  // }

  // @Query(() => [Board], { name: 'boards' })
  // async findAl(@Args() args: BoardAllInput): Promise<Board[]> {
  //   return this.boardService.findAll();
  // }

  // !todo Board => BoardAllOutPut

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

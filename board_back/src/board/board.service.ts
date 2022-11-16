import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateBoardInput } from './dto/create-board.input';
import { Board } from './entities/board.entity';
import { BoardAllInput } from './dto/board-all.input';
import { BoardAllInter } from './dto/board.inter';
import { UpdateBoardDto } from './dto/board-update';
import { BoardOneInput } from './dto/board-one.input';
// import { BoardOneInputType } from './dto/board-one.input';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async create(createBoardInput: CreateBoardInput) {
    return await this.boardRepository.save({
      ...createBoardInput,
    });
  }

  findAll() {
    return this.boardRepository.findAndCount({
      order: { createTime: 'DESC' },
    });
  }

  // promise는 aync await을 사용하면 사라진다.
  async getCount(): Promise<number> {
    const count = await this.boardRepository.count(); //7
    console.log(count, '<<<<<<<<<<<<<<<<<');
    return count;
  }

  // update
  updateBoard({ boardNum, data }: UpdateBoardDto) {
    // ! todo 데이터 변경하는거 구글링
    return this.boardRepository.update(boardNum, {
      ...data,
      // 현재 시간 기준으로 스트링 하기
      createTime: Date().toLocaleString(),
    });
  }

  async findAllBoard_service({ page, limit }: BoardAllInput) {
    const boards = await this.boardRepository.findAndCount({
      skip: limit * (page - 1),
      take: limit,
      order: { createTime: 'DESC' },
    });
    if (boards) {
      console.log(boards, 'board');
      return boards;
    } else {
      console.log('boards Skip/ Take error');
    }
  }

  // 게시글 찾기
  async findOneBoard(id: number): Promise<Board> {
    return await this.boardRepository.findOne({ where: { boardNum: id } });
  }

  // 게시글 삭제
  async deleteBoard(id: number): Promise<boolean> {
    const result = await this.boardRepository.delete(id);
    // delete로 삭제 된다면 결과값으로 1로 돌아온다. => 해당 수행에 영향을 받은 데이터가 1개 있다.
    if (result.affected === 0) {
      throw new NotFoundException(`Could not find a board with id ${id}`);
      return false;
    }

    return true;
  }

  // test 1 데이터 제한
  // async find({ query }): Promise<BoardAllInput> {
  //   const take = query.take || 10;
  //   const skip = query.skip || 0;
  //   const keyword = query.keyword || '';

  //   const [result, total] = await this.boardRepository.findAndCount({
  //     where: { title: Like('%' + keyword + '%') },
  //     order: { createTime: 'DESC' },
  //     take: take,
  //     skip: skip,
  //   });

  //   return {
  //     data: result,
  //     count: total,
  //   };
  // }

  // test 2 데이터 제한
  // async getAll({ page, limit}): Promise<BoardAllInput> {
  //   try {
  //     console.log(page);
  //     console.log(limit);
  //     return {
  //       ok: true,
  //       data: await this.boardRepository.find({
  //         skip: (page - 1) * limit,
  //         take: limit,
  //       }),
  //     };
  //   } catch (e) {
  //     return {
  //       ok: false,
  //       error: e,
  //     };
  //   }
  // }

  // 조회수
  // readCount({ cnt }: Board) {
  //   const count = cnt.readUser
  // }

  // 테스트 안됨.
  // async findOne({ boardSetNum }: BoardOneInput) {
  //   const boardOne = await this.boardRepository.findOne({
  //     where: { boardNum: boardSetNum },
  //   });
  //   return boardOne;
  // }

  // async findOneBoardtest(id: number): Promise<Board> {
  //   const test = await this.boardRepository.findOne({
  //     where: { boardNum: id },
  //   });
  //   if (!test) {
  //     console.log(' not found');
  //     return {
  //       ok: false,
  //     };
  //   }
  //   await this.boardRepository.delete(test);
  // }

  // async deleteBoard(id: number): Promise<Boolean> {}

  // 데이터 제한

  // console.log(boards); // 스킵 + limit 숫자를 통해 데이터 량 표시

  // return boards.map((item, index) => {
  //   return { item, index };
  // });

  // const name = boards!;

  // findOneBoard({ boardFindOneNum }: BoardOneInputType) {
  //   console.log(boardFindOneNum, '<<<<<');
  //   return this.boardRepository.findOne({
  //     where: {
  //       boardNum: boardFindOneNum,
  //     },
  //   });
  // }

  // findOneBoard({ boardFindOneNum }: BoardOneInputType) {
  //   console.log(boardFindOneNum, ' <<<<<<<<<<<<<<< ');
  //   return this.boardRepository.findOne({
  //     where: {
  //       boardNum: boardFindOneNum,
  //     },
  //   });
  // }

  // async getAllBoards({ offset, limit }: BoardAllInput) {
  //   const [boardReqData, count] = await this.boardRepository.findAndCount({
  //     limit: offset.take,
  //     skip: args.skip,
  //   })

  //   return { boardReqData, count }
  // }

  // async findAll({ offset, limit }: BoardAllInput) {
  // const [boardReqData, count] = await this.boardRepository.findAndCount({
  //   skip: limit * (offset - 1),
  //   take: limit,
  // });

  //   console.log('boardReqData====', boardReqData);
  //   console.log('totalCount===', count);
  //   return { boardReqData, count };
  // }
  // async getAllPosts(offset?: number, limit?: number, startId?: number) {
  //   const : FindManyOptions<Board>[''] = {};
  //   let separateCount = 0;
  //   if (startId) {
  //     where.id = MoreThan(startId);
  //     separateCount = await this.boardRepository.count();
  //   }

  //   const [items, count] = await this.boardRepository.findAndCount({
  //     where,
  //     relations: ['author'],
  //     order: {
  //       boardNum: 'ASC',
  //     },
  //     skip: offset,
  //     take: limit,
  //   });

  //   return {
  //     items,
  //     count: startId ? separateCount : count,
  //   };
  // }

  // async getAllPosts(offset?: number, limit?: number) {
  //   // count or find를  사용하여 할수 있지만 데이터베이스에 두개가 생기는 단점이 있다.
  //   const [items, count] = await this.boardRepository.findAndCount({
  //     order: {
  //       boardNum: 'ASC',
  //     },
  //     skip: offset,
  //     take: limit,
  //   });

  //   return {
  //     items,
  //     count,
  //   };
  // }

  // async findA({ offset, limit }: FetchBoardArgs) {
  //   const boardDataAll = await this.boardRepository.findOne({
  //     where: {userNum : }
  //   })
  // }

  // async page({ offset, limit }: PaginationParams) :Promise<PaginationParams>{
  //   const allBoard = await this.boardRepository.find({
  //     where: { boardNum },

  //   })
  // }

  // async boardEdit({ EditBoardTitle, EditBoardContents }: BoardUpdate) {
  //   const editBoard = await this.boardRepository.findOne({

  //   })
  // }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    return this.boardRepository.find();
  }

  // promise는 aync await을 사용하면 사라진다.
  async getCount(): Promise<number> {
    const count = await this.boardRepository.count(); //7
    console.log(count, '<<<<<<<<<<<<<<<<<');
    return count;
  }

  async findAllBoard_service(
    // 스킵 or take 지정해주기
    //  skip을 여기서 정해줘도 똑같다.
    args: BoardAllInput = { skip: 0, take: 5 }, // skip이랑 왜 take랑 정해주는지
  ) /* : Promise<BoardAllOutput> */ {
    // board oupt으로 사용하기 위해서 타입을 결정.
    const boards = await this.boardRepository.findAndCount({
      skip: args.skip,
      take: args.take,
    });

    if (boards) {
      console.log(boards);
      // return name;
      return;
    } else {
      console.log('boards Skip/ Take error');
    }

    // console.log(boards); // 스킵 + limit 숫자를 통해 데이터 량 표시

    // return boards.map((item, index) => {
    //   return { item, index };
    // });

    // const name = boards!;
  }

  updateBoard({ boardNum, data }: UpdateBoardDto) {
    return this.boardRepository.update(boardNum, { ...data });
  }

  // async findOne({ boardSetNum }: BoardOneInput) {
  //   const boardOne = await this.boardRepository.findOne({
  //     where: { boardNum: boardSetNum },
  //   });
  //   return boardOne;
  // }

  async findOne({ boardSetNum }: BoardOneInput) {
    const boardOne = await this.boardRepository.findOne({
      where: { boardNum: boardSetNum },
    });
    return boardOne;
  }

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

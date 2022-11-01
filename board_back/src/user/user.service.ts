import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    return await this.userRepository.save({
      ...createUserInput,
    });
  }

  // async getById(userId: string) {
  //   const user = await this.userRepository.findOne({ userId });
  //   if (user) {
  //     return user;
  //   }
  //   throw new HttpException(
  //     '사용자 id가 존재 하지 않습니다.',
  //     HttpStatus.NOT_FOUND,
  //   );
  // }

  // 서비스
  // 리턴을 아웃풋으로 받게

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository[0].findOne(id);
  }
}

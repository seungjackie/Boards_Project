import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { LoginInput } from './dto/user.login';
import { ApolloError } from 'apollo-server-express';
import * as bcrypt from 'bcrypt';

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

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository[0].findOne(id);
  }

  // input 에 createUserInput 추가
  async login({ LoginInputId, LoginInputPw }: LoginInput) {
    const user = await this.userRepository.findOne({
      where: { userId: LoginInputId },
    });
    console.log(user);
    if (!user) {
      console.log('존재하지 않는 ID입니다. ->  ', LoginInputId);
      return false;
    } else {
      console.log('user.userPw ->  ', user.userPw);
      console.log(user.userId);
      console.log(user.userPw === LoginInputPw);
      return user.userPw === LoginInputPw;
    }
  }
}

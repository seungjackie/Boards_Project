import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthenticationError, ForbiddenError } from 'apollo-server';
import bcrypt from 'bcrypt';
import sha256 from 'crypto-js/sha256';
import rand from 'csprng';
import { LoginInput } from './dto/user.login';
import { FindOneUserInput } from './dto/user-findone.input';
import { FindOneUserNumInput } from './dto/user-findUserNum.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'userAll' })
  findAll() {
    return this.userService.findAll();
  }

  // 로그인
  @Mutation(() => Boolean, { name: 'userCheck' })
  login(@Args('loginInput') loginInput: LoginInput) {
    // LoginInput으로 데이터 확인
    return this.userService.login(loginInput);
  }

  // 유저 찾기
  @Query(() => User, { name: 'userFindOne' })
  findOne(@Args('userFindOneInput') findOneUser: FindOneUserInput) {
    return this.userService.findUser(findOneUser);
  }

  // 유저 num 찾기
  @Query(() => User, { name: 'useNumFindOne' })
  findUserNum(
    @Args('userNumFindOne') findOneUserNumInput: FindOneUserNumInput,
  ) {
    return this.userService.findUserNum(findOneUserNumInput);
  }
}

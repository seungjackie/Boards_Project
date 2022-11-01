import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthenticationError, ForbiddenError } from 'apollo-server';
import bcrypt from 'bcrypt';
import sha256 from 'crypto-js/sha256';
import rand from 'csprng';

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

  @Query(() => [User], { name: 'userOne' })
  findOne(@Args('userNum', { type: () => String }) userNum: string) {
    return this.userService.findOne(userNum);
  }

  //   @Query(() => User, { name: 'login'})
  // login:(_)
}

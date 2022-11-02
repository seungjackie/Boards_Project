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
  findOne(@Args('userId', { type: () => String }) userId: string) {
    return this.userService.findOne(userId);
  }

  @Mutation(() => Boolean, { name: 'userCheck' })
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.userService.login(loginInput);
  }

  // @Mutation(() => Boolean ,{ userId : "userIdChect"})
  // login(@Args("loginInput") loginInput: LoginInput)

  //   @Query(() => User, { name: 'login'})
  // login:(_)
}

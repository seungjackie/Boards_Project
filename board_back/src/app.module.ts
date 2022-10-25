import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { MemberModule } from './member/member.module';
import { typeORMConfig } from './config/typeorm.config';
import { FileModule } from './file/file.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    MemberModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    DepartmentModule,
    FileModule,
    BoardModule,
  ],

  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

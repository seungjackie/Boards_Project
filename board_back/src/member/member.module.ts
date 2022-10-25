import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberResolver } from './member.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';

@Module({
  // forFEature?
  imports: [TypeOrmModule.forFeature([Member])],
  providers: [MemberResolver, MemberService],
})
export class MemberModule {}

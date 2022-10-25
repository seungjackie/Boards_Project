import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async create(createMemberInput: CreateMemberInput) {
    return await this.memberRepository.save({
      ...createMemberInput,
    });
  }

  // 서비스
  // 리턴을 아웃풋으로 받게

  findAll() {
    return this.memberRepository.find();
  }
}

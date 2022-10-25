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

  // create(createMemberInput: CreateMemberInput) {
  //   return 'This action adds a new member';
  // }

  findAll() {
    return `This action returns all member`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberInput: UpdateMemberInput) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}

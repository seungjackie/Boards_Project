import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';
import { File } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
  ) {}

  async create(createFileInput: CreateFileInput) {
    return await this.fileRepository.save({
      ...createFileInput,
    });
  }

  findAll() {
    return `This action returns all file`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileInput: UpdateFileInput) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentInput: CreateDepartmentInput) {
    return await this.departmentRepository.save({
      ...createDepartmentInput,
    });
  }

  findAll() {
    return this.departmentRepository.find();
  }

  findOne(Id: string) {
    return this.departmentRepository[0].findOne(Id);
  }
}

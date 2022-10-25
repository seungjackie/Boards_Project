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

  // create(createDepartmentInput: CreateDepartmentInput) {
  //   return 'This action adds a new department';
  // }

  findAll() {
    return `This action returns all department`;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentInput: UpdateDepartmentInput) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}

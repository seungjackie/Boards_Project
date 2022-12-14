import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FileService } from './file.service';
import { File } from './entities/file.entity';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Mutation(() => File)
  createFile(@Args('createFileInput') createFileInput: CreateFileInput) {
    return this.fileService.create(createFileInput);
  }

  @Query(() => [File], { name: 'fileAll' })
  findAll() {
    return this.fileService.findAll();
  }

  @Query(() => File, { name: 'fileOne' })
  findOne(@Args('fileNum', { type: () => Int }) fileNum: string) {
    return this.fileService.findOne(fileNum);
  }

  // @Mutation(() => File)
  // updateFile(@Args('updateFileInput') updateFileInput: UpdateFileInput) {
  //   return this.fileService.update(updateFileInput.id, updateFileInput);
  // }

  // @Mutation(() => File)
  // removeFile(@Args('id', { type: () => Int }) id: number) {
  //   return this.fileService.remove(id);
  // }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupDto } from './dto/create-group.dto';
import { Group } from './groups.model';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private groupRepository: typeof Group) { }

  async createGroup(dto: CreateGroupDto): Promise<Group> {
    return await this.groupRepository.create({ ...dto, name: dto.name.toLowerCase() });
  }

  async getFirstGroup(): Promise<Group> {
    const firstGroup = this.groupRepository.findOne({ order: [['id', 'ASC']] });
    return firstGroup;
  }
}

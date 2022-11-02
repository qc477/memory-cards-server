import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupStatisticsDto } from './dto/create-groupStatistics.dto';
import { GroupStatistics } from './groupStatistics.model';

@Injectable()
export class GroupStatisticsService {
  constructor(@InjectModel(GroupStatistics) private groupStatisticsRepository: typeof GroupStatistics) {}

  async createGroupStatistics(dto: CreateGroupStatisticsDto) {
    await this.groupStatisticsRepository.create(dto);
  }

  async incrementTotalCards(deckId: number, groupId: number): Promise<void> {
    await this.groupStatisticsRepository.increment({ totalCards: 1 }, { where: { deckId: deckId, groupId: groupId } });
  }
}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deck } from 'src/decks/decks.model';
import { Group } from 'src/groups/groups.model';
import { GroupStatistics } from './groupStatistics.model';
import { GroupStatisticsService } from './groupStatistics.service';

@Module({
  providers: [GroupStatisticsService],
  imports: [SequelizeModule.forFeature([GroupStatistics, Deck, Group])],
  exports: [GroupStatisticsService],
})
export class GroupStatisticsModule {}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Card } from './cards.model';
import { DecksModule } from 'src/decks/decks.module';
import { GroupsModule } from 'src/groups/groups.module';
import { GroupStatisticsModule } from 'src/groupStatistics/groupStatistics.module';

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [SequelizeModule.forFeature([Card]), DecksModule, GroupsModule, GroupStatisticsModule],
})
export class CardsModule {}

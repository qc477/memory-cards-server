import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';
import { Deck } from './decks.model';
import { Card } from 'src/cards/cards.model';
import { GroupsModule } from 'src/groups/groups.module';
import { GroupStatisticsModule } from 'src/groupStatistics/groupStatistics.module';

@Module({
  controllers: [DecksController],
  providers: [DecksService],
  imports: [SequelizeModule.forFeature([Deck, Card]), GroupsModule, GroupStatisticsModule],
  exports: [DecksService],
})
export class DecksModule {}

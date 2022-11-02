import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deck } from './decks/decks.model';
import { Card } from './cards/cards.model';
import { Group } from './groups/groups.model';
import { DecksModule } from './decks/decks.module';
import { CardsModule } from './cards/cards.module';
import { GroupsModule } from './groups/groups.module';
import { GroupStatistics } from './groupStatistics/groupStatistics.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Deck, Card, Group, GroupStatistics],
      autoLoadModels: true,
    }),
    DecksModule,
    CardsModule,
    GroupsModule,
    GroupsModule,
  ],
})
export class AppModule {}

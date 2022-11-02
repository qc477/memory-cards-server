import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupsService } from './groups.service';
import { Group } from './groups.model';
import { GroupsController } from './groups.controller';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService],
  imports: [SequelizeModule.forFeature([Group])],
  exports: [GroupsService],
})
export class GroupsModule {}

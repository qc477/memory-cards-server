import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DecksService } from 'src/decks/decks.service';
import { GroupsService } from 'src/groups/groups.service';
import { GroupStatisticsService } from 'src/groupStatistics/groupStatistics.service';
import { Card } from './cards.model';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(Card) private cardRepository: typeof Card,
    private decksService: DecksService,
    private groupsService: GroupsService,
    private groupStatisticsService: GroupStatisticsService
  ) {}

  async createCard(dto: CreateCardDto) {
    const firstGroup = await this.groupsService.getFirstGroup();
    const card = await this.cardRepository.create({...dto, groupId: firstGroup.id});
    await this.decksService.incrementTotalCards(dto.deckId);
    await this.groupStatisticsService.incrementTotalCards(dto.deckId, firstGroup.id);
    return card;
  }

  async getAllCards(deckId: number): Promise<Card[]> {
    const cards = await this.cardRepository.findAll({
      where: { deckId: deckId },
    });
    return cards;
  }

  async deleteCard(id: number): Promise<number> {
    await this.cardRepository.destroy({ where: { id: id }, force: true });
    return id;
  }
}

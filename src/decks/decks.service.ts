import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GroupsService } from 'src/groups/groups.service';
import { GroupStatisticsService } from 'src/groupStatistics/groupStatistics.service';
import { GroupStatistics } from 'src/groupStatistics/groupStatistics.model';
import { Deck } from './decks.model';
import { CreateDeckDto } from './dto/create-deck.dto';

@Injectable()
export class DecksService {
  constructor(
    @InjectModel(Deck) private deckRepository: typeof Deck,
    private groupStatisticsService: GroupStatisticsService,
    private groupsService: GroupsService
  ) {}

  async createDeck(dto: CreateDeckDto): Promise<Deck> {
    const deck = await this.deckRepository.create(dto);
    const firstGroup = await this.groupsService.getFirstGroup();
    await this.groupStatisticsService.createGroupStatistics({
      deckId: deck.id,
      groupId: firstGroup.id,
      groupName: firstGroup.name,
    });
    return deck;
  }

  async getAllDecks(): Promise<Deck[]> {
    const decks = await this.deckRepository.findAll({
      include: { model: GroupStatistics, attributes: ['groupId', 'groupName', 'totalCards'] },
    });
    return decks;
  }

  async deleteDeck(id: number): Promise<number> {
    await this.deckRepository.destroy({ where: { id: id }, force: true });
    return id;
  }

  async incrementTotalCards(deckId: number) {
    await this.deckRepository.increment({ totalCards: 1 }, { where: { id: deckId } });
  }
}

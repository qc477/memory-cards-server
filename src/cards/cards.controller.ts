import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Post()
  createCard(@Body() cardDto: CreateCardDto) {
    return this.cardsService.createCard(cardDto);
  }

  @Get(':deckId')
  getAllCards(@Param('deckId') deckId: number) {
    return this.cardsService.getAllCards(deckId);
  }

  @Delete(':id')
  deleteCard(@Param('id') id: number) {
    return this.cardsService.deleteCard(id);
  }
}

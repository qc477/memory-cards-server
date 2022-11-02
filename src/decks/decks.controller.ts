import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';

@Controller('decks')
export class DecksController {
  constructor(private decksService: DecksService) {}

  @Post()
  createDeck(@Body() deckDto: CreateDeckDto) {
    return this.decksService.createDeck(deckDto);
  }

  @Get()
  getAllDecks() {
    return this.decksService.getAllDecks();
  }

  @Delete(':id')
  deleteDeck(@Param('id') id: number) {
    return this.decksService.deleteDeck(id);
  }
}

export class CreateCardDto {
  readonly question: string;
  readonly answer: string;
  readonly deckId: number;
  readonly groupId: number;
}

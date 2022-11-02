import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Deck } from 'src/decks/decks.model';
import { Group } from 'src/groups/groups.model';

interface GroupStatisticsCreationAttrs {
  deckId: number;
  groupId: number;
  groupName: string;
}

@Table({ tableName: 'group_statistics', createdAt: false, updatedAt: false })
export class GroupStatistics extends Model<GroupStatistics, GroupStatisticsCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Deck)
  @Column({ type: DataType.INTEGER })
  deckId: number;

  @BelongsTo(() => Deck)
  deck: Deck;

  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER })
  groupId: number;

  @BelongsTo(() => Group)
  group: Group;

  @Column({ type: DataType.STRING })
  groupName: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  totalCards: number;
}

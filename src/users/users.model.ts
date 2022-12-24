import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Deck } from 'src/decks/decks.model';

interface UserCreationAttr {
  login: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => Deck)
  decks: Deck[];
}

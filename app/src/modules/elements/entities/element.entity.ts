import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'elements' })
export class Element extends Model<Element> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column(DataType.STRING)
  type: string;

  @Column(DataType.INTEGER)
  x: number;

  @Column(DataType.INTEGER)
  y: number;

  @Column(DataType.INTEGER)
  width: number;

  @Column(DataType.INTEGER)
  height: number;

  @Column(DataType.INTEGER)
  opacity: number;

  @Column(DataType.INTEGER)
  scale: number;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  props: object;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  meta: object;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;
}

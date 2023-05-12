import { Model, Column, Table } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';

@Table
export class User extends Model {
  @Column
  id: number;

  @Column
  username: string;

  @Column
  password: string;

  constructor(@InjectModel(User) private readonly userModel: typeof User) {
    super();
  }
}

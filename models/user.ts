 'use strict';
/*  const {
  Model
} = require('sequelize'); */
//module.exports = (sequelize, DataTypes) => {
//  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  //  static associate(models) {
      // define association here
 //   }
//  }
//  User.init({
  //  firstName: DataTypes.STRING,
 //   lastName: DataTypes.STRING,
 //   email: DataTypes.STRING
//  }, {
  //  sequelize,
  //  modelName: 'User',
 // });
  //return User;
//};  
import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;
}

/* 
Importar el modelo en el módulo correspondiente:

  import { SequelizeModule } from '@nestjs/sequelize';
  import { User } from './user.model';

  @Module({
    imports: [SequelizeModule.forFeature([User])],
  })
  export class UserModule {} 
*/

/* 
Utilizar el modelo en un controlador o servicio:

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

  @Injectable()
  export class UserService {
    constructor(
      @InjectModel(User)
      private userModel: typeof User,
    ) {}

    async findAll(): Promise<User[]> {
      return this.userModel.findAll();
    }
  }
*/
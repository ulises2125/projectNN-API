import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'tucontraseña',
      database: 'tubasededatos',
      autoLoadModels: true,
      synchronize: true,
      models: [__dirname + '/models/*.model.ts'],
    }),
  ],
  //imports: [ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

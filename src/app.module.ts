import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '1234',
      database: 'master',
      autoLoadModels: true,
      synchronize: true,
      models: [__dirname + '/models/*.model.ts'],
    }),
    AuthModule,
  ],
  //imports: [ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

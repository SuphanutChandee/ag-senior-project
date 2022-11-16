import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OverviewPredictsModule } from './OverviewPredict/OP.module';
import { GoatsDetailsModule } from './GoatsDetails/GD.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mothmam:1q2w3e4r@cluster0.xrlafdg.mongodb.net/AG'), OverviewPredictsModule, GoatsDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

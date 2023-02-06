import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { OverviewPredictsModule } from './OverviewPredict/OP.module';
import { GoatsDetailsModule } from './GoatsDetails/GD.module'
import { OverviewHeaderModule } from './OverviewHeader/OH.module'
import { AllGoatsNumModule } from './AllGoatsNum/AGN.module'
import { OverviewHousesModule } from './OverviewHouses/OH.module'
import { GoatInHousesListModule } from './GoatInHousesList/GIHL.module'
import { EventListModule } from './EventList/EL.module'
import { DevicesModule } from './Device/Device.module'
import { LineAleartsModule } from './LineAleart/LineAleart.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mothmam:1q2w3e4r@cluster0.xrlafdg.mongodb.net/AG'), OverviewPredictsModule, GoatsDetailsModule, OverviewHeaderModule, AllGoatsNumModule, OverviewHousesModule, GoatInHousesListModule, EventListModule, DevicesModule, LineAleartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

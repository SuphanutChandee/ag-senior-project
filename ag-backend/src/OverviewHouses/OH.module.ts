import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OverviewHousesService } from './OH.service';
import { OverviewHouses, OverviewHousesSchema } from './OH.schema';
import { AppController } from '../app.controller';
import { OverviewHousesController } from './OH.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "OverviewHouses", schema: OverviewHousesSchema }])],
  //controllers: [AppController],
  controllers: [OverviewHousesController],
  providers: [OverviewHousesService],
  exports: [OverviewHousesService],
})
export class OverviewHousesModule {}
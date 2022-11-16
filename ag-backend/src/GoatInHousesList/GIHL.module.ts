import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoatInHousesListService } from './GIHL.service';
import { GoatInHousesList, GoatInHousesListSchema } from './GIHL.schema';
import { AppController } from '../app.controller';
import { GoatInHousesListController } from './GIHL.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "GoatInHousesList", schema: GoatInHousesListSchema }])],
  //controllers: [AppController],
  controllers: [GoatInHousesListController],
  providers: [GoatInHousesListService],
  exports: [GoatInHousesListService],
})
export class GoatInHousesListModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OverviewPredictsService } from './OP.service';
import { OverviewPredict, OverviewPredictSchema } from './OP.schema';
import { AppController } from '../app.controller';
import { OverviewPredictsController } from './OP.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "OverviewPredict", schema: OverviewPredictSchema }])],
  //controllers: [AppController],
  controllers: [OverviewPredictsController],
  providers: [OverviewPredictsService],
  exports: [OverviewPredictsService],
})
export class OverviewPredictsModule {}
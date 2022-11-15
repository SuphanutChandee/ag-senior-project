import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OverviewPredictsService } from '../services/OverviewPredicts';
import { OverviewPredict, OverviewPredictSchema } from './OP.schema';
import { AppController } from '../app.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: "OverviewPredict", schema: OverviewPredictSchema }])],
  controllers: [AppController],
  providers: [OverviewPredictsService],
  exports: [OverviewPredictsService],
})
export class OverviewPredictsModule {}
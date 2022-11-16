import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OverviewHeaderService } from './OH.service';
import { OverviewHeader, OverviewHeaderSchema } from './OH.schema';
import { AppController } from '../app.controller';
import { OverviewHeaderController } from './OH.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "OverviewHeader", schema: OverviewHeaderSchema }])],
  //controllers: [AppController],
  controllers: [OverviewHeaderController],
  providers: [OverviewHeaderService],
  exports: [OverviewHeaderService],
})
export class OverviewHeaderModule {}
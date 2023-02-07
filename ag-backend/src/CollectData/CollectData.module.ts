import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectDatasService } from './CollectData.service';
import { CollectData, CollectDataSchema } from './CollectData.schema';
import { AppController } from '../app.controller';
import { CollectDatasController } from './CollectData.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "CollectData", schema: CollectDataSchema }])],
  //controllers: [AppController],
  controllers: [CollectDatasController],
  providers: [CollectDatasService],
  exports: [CollectDatasService],
})
export class CollectDatasModule {}
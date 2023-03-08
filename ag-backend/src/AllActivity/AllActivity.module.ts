import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AllActivitysService } from './AllActivity.service';
import { AllActivity, AllActivitySchema } from './AllActivity.schema';
import { AppController } from '../app.controller';
import { AllActivitysController } from './AllActivity.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "AllActivity", schema: AllActivitySchema }])],
  //controllers: [AppController],
  controllers: [AllActivitysController],
  providers: [AllActivitysService],
  exports: [AllActivitysService],
})
export class AllActivitysModule {}
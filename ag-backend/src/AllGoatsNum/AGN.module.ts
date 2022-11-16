import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AllGoatsNumService } from './AGN.service';
import { AllGoatsNum, AllGoatsNumSchema } from './AGN.schema';
import { AppController } from '../app.controller';
import { AllGoatsNumController } from './AGN.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "AllGoatsNum", schema: AllGoatsNumSchema }])],
  //controllers: [AppController],
  controllers: [AllGoatsNumController],
  providers: [AllGoatsNumService],
  exports: [AllGoatsNumService],
})
export class AllGoatsNumModule {}
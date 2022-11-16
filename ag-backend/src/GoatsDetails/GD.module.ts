import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoatsDetailsService } from './GD.service';
import { GoatsDetails, GoatsDetailsSchema } from './GD.schema';
import { AppController } from '../app.controller';
import { GoatsDetailsController } from './GD.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "GoatsDetails", schema: GoatsDetailsSchema }])],
  //controllers: [AppController],
  controllers: [GoatsDetailsController],
  providers: [GoatsDetailsService],
  exports: [GoatsDetailsService],
})
export class GoatsDetailsModule {}
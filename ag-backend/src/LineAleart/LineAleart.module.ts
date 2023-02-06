import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LineAleartsService } from './LineAleart.service';
import { LineAleart, LineAleartSchema } from './LineAleart.schema';
import { AppController } from '../app.controller';
import { LineAleartsController } from './LineAleart.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "LineAleart", schema: LineAleartSchema }])],
  //controllers: [AppController],
  controllers: [LineAleartsController],
  providers: [LineAleartsService],
  exports: [LineAleartsService],
})
export class LineAleartsModule {}
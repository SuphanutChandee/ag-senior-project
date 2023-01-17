import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesService } from './Device.service';
import { Device, DeviceSchema } from './Device.schema';
import { AppController } from '../app.controller';
import { DevicesController } from './Device.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "Device", schema: DeviceSchema }])],
  //controllers: [AppController],
  controllers: [DevicesController],
  providers: [DevicesService],
  exports: [DevicesService],
})
export class DevicesModule {}
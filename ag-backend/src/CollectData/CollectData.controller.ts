import { Controller, Get, Post, Put, Body, Param, Query, Delete } from '@nestjs/common';
import { CollectDatasService } from './CollectData.service';
import { CreateCollectDataDto } from './create-CollectData.dto';
import { UpdateCollectDataDto } from './update-CollectData.dto';

@Controller()
export class CollectDatasController {
  constructor(private readonly CollectDatasService:CollectDatasService){}
  
  @Get('CollectDataList')
  async CollectDataList(): Promise<any> {
    return await this.CollectDatasService.findAll();
  }
//, zeroActivity, sumActivity, lastActivity
//, zeroActivity, sumActivity, lastActivity
  @Put('updateCollectDataList')
  async updateEventList(@Query("device") device, @Body() UpdateCollectDataDto) {
    //console.log(put)
    return this.CollectDatasService.update(device, UpdateCollectDataDto)
  }
}
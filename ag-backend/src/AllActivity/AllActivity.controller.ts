import { Controller, Get, Post, Put, Body, Param, Query, Delete } from '@nestjs/common';
import { AllActivitysService } from './AllActivity.service';
import { CreateAllActivityDto } from './create-AllActivity.dto';
import { UpdateAllActivityDto } from './update-AllActivity.dto';

@Controller()
export class AllActivitysController {
  constructor(private readonly AllActivitysService:AllActivitysService){}
  
  @Get('AllActivityList')
  async AllActivityList(): Promise<any> {
    return await this.AllActivitysService.findAll();
  }
//, zeroActivity, sumActivity, lastActivity
//, zeroActivity, sumActivity, lastActivity
  @Put('updateAllActivityList')
  async updateEventList(@Query("gnum") gnum, @Body() UpdateAllActivityDto) {
    //console.log(put)
    return this.AllActivitysService.update(gnum, UpdateAllActivityDto)
  }
}
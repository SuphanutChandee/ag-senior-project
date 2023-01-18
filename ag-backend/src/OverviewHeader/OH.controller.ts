import { Controller, Get, Post, Put, Body, Param, Query, Delete } from '@nestjs/common';
import { OverviewHeaderService } from './OH.service';
import { UpdateOverviewHeaderDto } from './update-OH.dto';

@Controller()
export class OverviewHeaderController {
  constructor(private readonly overviewHeaderService:OverviewHeaderService){}
  
  @Get('OverviewHeader')
  async OverviewHeaderList(): Promise<any> {
    return await this.overviewHeaderService.findAll();
  }

  @Put('updateOverviewHeader')
  async updateOverviewHeader(@Body() put: UpdateOverviewHeaderDto ) {
    //console.log(put)
    return this.overviewHeaderService.update(put)
  }
}
import { Controller, Get, Post, Put, Body, Param, Query, Delete } from '@nestjs/common';
import { EventListService } from './EL.service';
import { CreateEventListDto } from './create-EventList.dto'
import { UpdateEventListDto } from './update-EventList.dto';

@Controller()
export class EventListController {
  constructor(private readonly eventListService:EventListService){}
  
  @Post('newEventList')
  async newEventList(@Body() createEventListDto: CreateEventListDto) {
    return await this.eventListService.create(createEventListDto);
  }

  @Put('updateEventList')
  async updateEventList(@Query("eventNum") eventNum, @Body() put: UpdateEventListDto ) {
    //console.log(put)
    return this.eventListService.update(eventNum, put)
  }

  @Put('uupdateEventList/:eventNum')
  async uupdateEventList(@Param("eventNum") eventNum, @Body() put: UpdateEventListDto ) {
    console.log(typeof(eventNum))
    return this.eventListService.update(eventNum, put)
  }

  @Delete('deleteEventList')
  async deleteEventList(@Query("eventNum") eventNum) {
    return this.eventListService.del(eventNum)
  }

  @Get('EventList')
  async EventList(): Promise<any> {
    return await this.eventListService.findAll();
  }

  @Get('FindOneEventList')
  async FindOneEventList(@Query("eventNum") eventNum) {
    return await this.eventListService.findOne(eventNum);
  }
}
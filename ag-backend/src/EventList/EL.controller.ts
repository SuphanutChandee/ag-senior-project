import { Controller, Get } from '@nestjs/common';
import { EventListService } from './EL.service';

@Controller()
export class EventListController {
  constructor(private readonly eventListService:EventListService){}
  
  @Get('EventList')
  async EventList(): Promise<any> {
    return await this.eventListService.findAll();
  }
}
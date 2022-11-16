import { Controller, Get } from '@nestjs/common';
import { GoatsDetailsService } from './GD.service';

@Controller()
export class GoatsDetailsController {
  constructor(private readonly goatsDetailsService:GoatsDetailsService){}
  
  @Get('GoatsDetails')
  async GoatsDetails(): Promise<any> {
    return await this.goatsDetailsService.findAll();
  }
}
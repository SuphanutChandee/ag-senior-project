import { Controller, Get } from '@nestjs/common';
import { OverviewPredictsService } from './OP.service';

@Controller()
export class OverviewPredictsController {
  constructor(private readonly overViewPredictService:OverviewPredictsService){}
  
  @Get('OverviewPredictList')
  async OverviewPredictList(): Promise<any> {
    return await this.overViewPredictService.findAll();
  }
}
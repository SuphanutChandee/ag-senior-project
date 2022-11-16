import { Controller, Get } from '@nestjs/common';
import { AllGoatsNumService } from './AGN.service';

@Controller()
export class AllGoatsNumController {
  constructor(private readonly allGoatsNumService:AllGoatsNumService){}
  
  @Get('AllGoatsNum')
  async AllGoatsNum(): Promise<any> {
    return await this.allGoatsNumService.findAll();
  }
}
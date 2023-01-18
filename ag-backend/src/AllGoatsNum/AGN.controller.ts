import { Controller, Get, Put, Post} from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AllGoatsNumService } from './AGN.service';
import { CreateAllGoatsNumDto } from './create-AGN.dto';

@Controller()
export class AllGoatsNumController {
  constructor(private readonly allGoatsNumService:AllGoatsNumService){}
  
  @Get('AllGoatsNum')
  async AllGoatsNum(): Promise<any> {
    return await this.allGoatsNumService.findAll();
  }

  @Post('AddGoatNum')
  async AddGoatNum(@Body() createAllGoatsNumDto: CreateAllGoatsNumDto): Promise<any> {
    return await this.allGoatsNumService.add(createAllGoatsNumDto);
  }
}
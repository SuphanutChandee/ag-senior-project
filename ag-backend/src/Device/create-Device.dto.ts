import { IsInt, IsString, IsNumber } from 'class-validator';

export class CreateDeviceListDto {
    @IsString()
    readonly device: string;
  
    @IsString()
    readonly lastActivity: Number;
  
    @IsString()
    readonly sumActivity: Number;
  
    @IsString()
    readonly zeroActivity: Number;
  }
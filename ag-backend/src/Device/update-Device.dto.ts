
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

export class UpdateDeviceListDto {
    @IsString()
    @IsNotEmpty()
    device: string;
  
    @IsString()
    @IsNotEmpty()
    lastActivity: Number;
  
    @IsString()
    @IsNotEmpty()
    sumActivity: Number;
  
    @IsString()
    @IsNotEmpty()
    zeroActivity: Number;
  }
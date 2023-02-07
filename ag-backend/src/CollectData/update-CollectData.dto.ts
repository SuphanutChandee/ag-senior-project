
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

export class UpdateCollectDataDto {
    @IsString()
    @IsNotEmpty()
    device: string;
  
    @IsNumber()
    @IsNotEmpty()
    lastActivity: [];
  
    @IsNumber()
    @IsNotEmpty()
    sumActivity: [];
  
    @IsNumber()
    @IsNotEmpty()
    zeroActivity: [];
  }
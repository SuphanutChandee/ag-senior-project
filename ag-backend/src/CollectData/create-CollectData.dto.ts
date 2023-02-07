import { IsInt, IsString, IsNumber } from 'class-validator';

export class CreateCollectDataDto {
    @IsString()
    readonly device: string;
  
    @IsNumber()
    readonly lastActivity: [];
  
    @IsNumber()
    readonly sumActivity: [];
  
    @IsNumber()
    readonly zeroActivity: [];
  }
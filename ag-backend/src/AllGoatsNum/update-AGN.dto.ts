
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

export class UpdateAllGoatsNumDto {
    @IsString()
    @IsNotEmpty()
    value: String;
  }
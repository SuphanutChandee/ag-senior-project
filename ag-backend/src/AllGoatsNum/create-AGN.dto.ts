import { IsInt, IsString, IsNumber } from 'class-validator';

export class CreateAllGoatsNumDto {
    @IsString()
    readonly value: String;
  }
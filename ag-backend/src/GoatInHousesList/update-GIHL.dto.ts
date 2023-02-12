
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

export class UpdateGoatInHousesList {
    @IsString()
    @IsNotEmpty()
    gnum: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsNumber()
    @IsNotEmpty()
    age: Number;

    @IsString()
    @IsNotEmpty()
    behavior: string;

    @IsString()
    @IsNotEmpty()
    color: string;
  }
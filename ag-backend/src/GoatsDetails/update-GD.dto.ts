
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

export class UpdateGoatsDetailstDto {
    @IsString()
    @IsNotEmpty()
    gnum: string;
    
    @IsString()
    @IsNotEmpty()
    status: string;
  
    @IsNumber()
    @IsNotEmpty()
    unit: Number;
  
    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    gene: string;
  
    @IsString()
    @IsNotEmpty()
    birthDate: string;
    
    @IsString()
    @IsNotEmpty()
    bornWeight: string;
    
    @IsString()
    @IsNotEmpty()
    Fnum: string;
    
    @IsString()
    @IsNotEmpty()
    Fgene: string;
    
    @IsString()
    @IsNotEmpty()
    Mnum: string;
    
    @IsString()
    @IsNotEmpty()
    Mgene: string;
    
    @IsString()
    @IsNotEmpty()
    DD: string;
    
    @IsNumber()
    @IsNotEmpty()
    age: number;
    
    @IsString()
    @IsNotEmpty()
    behavior: string;
    
    @IsString()
    @IsNotEmpty()
    color: string;

    @IsString()
    @IsNotEmpty()
    predicts: {
      date: string;
      name: string;
      type: string;
      details: string;
      chance: string;
      color: string;
    }[];

    @IsNumber()
    @IsNotEmpty()
    Activity: [];
  }
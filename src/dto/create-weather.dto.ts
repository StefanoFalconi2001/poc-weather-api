import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateWeatherDto {
  @ApiProperty({ example: 'Quito', description: 'City name' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiPropertyOptional({ example: 'Ecuador', description: 'Country name' })
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({ example: 25, description: 'Temperature in Celsius' })
  @IsNumber()
  temperature: number;

  @ApiProperty({ example: 80, description: 'Humidity in percentage' })
  @IsNumber()
  humidity: number;

  @ApiProperty({ example: 'Sunny', description: 'Weather description' })
  @IsString()
  description: string;

  @ApiPropertyOptional({
    example: '2025-07-23T18:00:00.000Z',
    description: 'Date the weather was recorded',
  })
  @IsOptional()
  @IsDateString()
  createdAt?: string;
}

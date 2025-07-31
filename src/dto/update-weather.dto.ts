import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateWeatherDto {
  @ApiPropertyOptional({ example: 'Quito', description: 'City name' })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiPropertyOptional({ example: 'Ecuador', description: 'Country name' })
  @IsString()
  @IsOptional()
  country?: string;

  @ApiPropertyOptional({ example: 25, description: 'Temperature in Celsius' })
  @IsNumber()
  @IsOptional()
  temperature?: number;

  @ApiPropertyOptional({ example: 80, description: 'Humidity in percentage' })
  @IsNumber()
  @IsOptional()
  humidity?: number;

  @ApiPropertyOptional({ example: 'Sunny', description: 'Weather condition' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    example: '2025-07-23T18:00:00.000Z',
    description: 'Date the weather was recorded',
  })
  @IsOptional()
  @IsDateString()
  createdAt?: string;
}

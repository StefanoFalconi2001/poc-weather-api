import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CreateWeatherDto } from 'src/dto/create-weather.dto';
import { UpdateWeatherDto } from 'src/dto/update-weather.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Weather')
@Controller('weathersdb')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  @ApiOperation({ summary: 'Get all weather records' })
  @ApiResponse({ status: 200, description: 'List of weather records' })
  findAll() {
    return this.weatherService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a weather record by ID' })
  @ApiParam({ name: 'id', type: String, description: 'Weather record ID' })
  @ApiResponse({ status: 200, description: 'Weather record found' })
  @ApiNotFoundResponse({ description: 'Weather record not found' })
  async findOne(@Param('id') id: string) {
    const weather = await this.weatherService.findOne(id);
    if (!weather) throw new NotFoundException('Weather not found');
    return weather;
  }

  @Post()
  @ApiOperation({ summary: 'Create a new weather record' })
  @ApiBody({ type: CreateWeatherDto, description: 'Weather data to create' })
  @ApiResponse({ status: 201, description: 'Weather record created' })
  async create(@Body() body: CreateWeatherDto) {
    try {
      return await this.weatherService.create(body);
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as { code?: unknown }).code === 11000
      ) {
        throw new ConflictException('Weather already exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a weather record by ID' })
  @ApiParam({ name: 'id', type: String, description: 'Weather record ID' })
  @ApiResponse({ status: 204, description: 'Weather record deleted' })
  @ApiNotFoundResponse({ description: 'Weather record not found' })
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const weather = await this.weatherService.delete(id);
    if (!weather) throw new NotFoundException('Weather not found');
    return weather;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a weather record by ID' })
  @ApiParam({ name: 'id', type: String, description: 'Weather record ID' })
  @ApiBody({ type: UpdateWeatherDto, description: 'Weather data to update' })
  @ApiResponse({ status: 200, description: 'Weather record updated' })
  @ApiNotFoundResponse({ description: 'Weather record not found' })
  @ApiConflictResponse({ description: 'Conflict occurred while updating' })
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() body: UpdateWeatherDto) {
    // Simplificado: el service ya lanza NotFoundException si no existe
    return this.weatherService.update(id, body);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count all weather records' })
  @ApiResponse({ status: 200, description: 'Total number of records' })
  async count() {
    return { total: await this.weatherService.count() };
  }

  @Delete('all')
  @ApiOperation({ summary: 'Delete all weather records (dev only)' })
  @HttpCode(204)
  async deleteAll() {
    await this.weatherService.deleteAll();
  }
}

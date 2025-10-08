import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Weather, WeatherDocument } from 'src/schemas/weather.schemas';
import { Model } from 'mongoose';
import { CreateWeatherDto } from 'src/dto/create-weather.dto';
import { UpdateWeatherDto } from 'src/dto/update-weather.dto';

@Injectable()
export class WeatherService {
  constructor(
    @InjectModel(Weather.name) private weatherModel: Model<WeatherDocument>,
  ) {}

  findAll(): Promise<WeatherDocument[]> {
    return this.weatherModel.find().sort({ createdAt: -1 }).exec();
  }

  async create(createWeatherDto: CreateWeatherDto): Promise<WeatherDocument> {
    const newWeather = new this.weatherModel({
      ...createWeatherDto,
      createdAt: new Date(), // aquí se asigna la fecha actual automáticamente
    });
    return newWeather.save();
  }

  async findOne(id: string): Promise<WeatherDocument | null> {
    return this.weatherModel.findById(id).exec();
  }

  async delete(id: string): Promise<WeatherDocument | null> {
    return this.weatherModel.findByIdAndDelete(id).exec();
  }

  async update(
    id: string,
    weather: UpdateWeatherDto,
  ): Promise<WeatherDocument> {
    const updatedWeather = await this.weatherModel
      .findByIdAndUpdate(
        id,
        { ...weather, updatedAt: new Date() }, // opcional
        { new: true },
      )
      .exec();

    if (!updatedWeather) {
      throw new NotFoundException('Weather not found');
    }

    return updatedWeather;
  }

  async deleteAll(): Promise<void> {
    await this.weatherModel.deleteMany({});
  }

  async count(): Promise<number> {
    return this.weatherModel.countDocuments();
  }
}

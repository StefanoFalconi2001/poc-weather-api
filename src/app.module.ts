import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weathers/weather.module';
import { MongooseModule } from '@nestjs/mongoose';

console.log('MongoDB URI:', process.env.MONGODB_URI);

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    WeatherModule,
  ],
})
export class AppModule {}

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Weather {
  @Prop({
    required: true,
    trim: true,
  })
  city: string;

  @Prop({
    required: true,
    trim: true,
  })
  country: string;

  @Prop({
    required: true,
  })
  temperature: number;

  @Prop({
    required: true,
  })
  humidity: number;

  @Prop({
    required: true,
    trim: true,
  })
  description: string;
}

export type WeatherDocument = Weather & Document;

export const WeatherSchema = SchemaFactory.createForClass(Weather);

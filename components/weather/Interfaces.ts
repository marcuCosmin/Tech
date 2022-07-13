import { Coords } from '../../services/Interfaces';

export interface WeatherType {
  name: string;
  country: string;
  imageCode: string;
  id: number;
  temperature: number;
  humidity: number;
  feelsLike: number;
  descripion: string;
  visibility: number;
  pressure: number;
}

export interface WeatherProps {
  option?: Coords | string;
}

import React, { useEffect, useState } from 'react';

import { getWeather } from '../../services/api';

import { Loader } from '../../styles/Loader.styled';
import { Wrapper, H1, List, Img, Division } from '../../styles/Weather.styled';

import { WeatherProps, WeatherType } from './Interfaces';

export default function Weather({ option }: WeatherProps) {
  const [weather, setWeather] = useState<WeatherType | null>(null);

  useEffect(() => {
    getWeather(option ? option : undefined).then(result => {
      if (result) {
        setWeather(result as WeatherType);
      }
    });
  }, []);

  if (!weather) return <Loader />;
  return (
    <Wrapper>
      <H1>{[weather.name, weather.country].join(' ')}</H1>
      <Division>
        <Img
          src={`https://openweathermap.org/img/w/${weather.imageCode}.png`}
          alt="Image not available"
        />
        <span>{weather.temperature} &#x2103;</span>
      </Division>
      <Division>
        <span>Feels like {weather.feelsLike} &#x2103;, &nbsp;</span>
        <span>{weather.descripion}</span>
      </Division>
      <List>
        <li>Pressure: {weather.pressure} hPa</li>
        <li>Humidity: {weather.humidity} %</li>
        {weather.visibility && (
          <li>Visibility: {weather.visibility / 1000} km</li>
        )}
      </List>
    </Wrapper>
  );
}

import { City, Coords } from './Interfaces';

import { getUserCoordinates, getStoredCities, storeCity } from './functions';

import { defaultCities, apiUrl, apiKey } from './constants';

import cloneDeep from 'lodash.clonedeep';

import { WeatherType } from '../components/weather/Interfaces';

async function getWeather(
  option?: Coords | string
): Promise<WeatherType | City | undefined> {
  if (!option) {
    option = await getUserCoordinates();
  }

  const fetchUrl =
    typeof option === 'string'
      ? `${apiUrl}find?q=${[option, apiKey].join('')}`
      : `${apiUrl}weather?lat=${option.lat}&lon=${option.lon}${apiKey}`;

  return fetch(fetchUrl)
    .then(raw => raw.json())
    .then(response => {
      const handledResponse =
        typeof option === 'string' ? response.list[0] : response;
      if (typeof option === 'string') {
        if (!response.list.length) return;
      }
      const returnValue =
        option === 'string'
          ? {}
          : {
              imageCode: handledResponse.weather[0].icon,
              temperature: handledResponse.main.temp,
              humidity: handledResponse.main.humidity,
              feelsLike: handledResponse.main.feels_like,
              descripion: handledResponse.weather[0].description,
              visibility: handledResponse.visibility,
              pressure: handledResponse.main.pressure,
            };

      return {
        id: handledResponse.id,
        name: handledResponse.name,
        country: handledResponse.sys.country,
        ...returnValue,
      };
    });
}

async function getCities(input?: string) {
  if (input) {
    if (!input.length) return [];
  }

  const citiesToBeShown = cloneDeep(defaultCities);

  if (input) {
    const foundCity = await getWeather(input);

    if (foundCity) {
      citiesToBeShown.splice(0);
      citiesToBeShown.push(foundCity as City);
      storeCity(input);
    } else {
      citiesToBeShown.splice(0);
    }
  } else {
    const storedCities: City[] = [];

    for (const city of getStoredCities()) {
      const foundCity = await getWeather(city);
      if (foundCity) storedCities.push(foundCity as City);
    }
    const shallowStored = storedCities.slice();

    for (const city of shallowStored) {
      if (storedCities.some(c => c.name === city.name)) {
        citiesToBeShown.splice(
          citiesToBeShown.findIndex(c => c.name === city.name),
          1
        );
      } else {
        citiesToBeShown.splice(0, 1);
      }
    }

    for (const city of storedCities) {
      citiesToBeShown.push(city);
    }
  }

  return citiesToBeShown;
}

export { getWeather, getCities };

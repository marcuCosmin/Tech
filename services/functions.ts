import { Coords } from './Interfaces';

function getCookieValue(cookieName: string): string {
  if (!document.cookie.includes(cookieName)) return '';

  const cookies = document.cookie.split(';');
  const index = cookies.findIndex(el => el.includes(cookieName));
  return cookies[index].split('=')[1];
}

function updateCookie(
  cookieName: string,
  cookieValue: string,
  remove: boolean
): void {
  document.cookie = `${cookieName}=${cookieValue}; expires=27 June ${
    new Date().getFullYear() + (remove ? -10 : 10)
  } 00:00:00`;
}

function storeCity(name: string): void {
  let cities: string | string[] = getCookieValue('weatherCities');

  if (cities.length) {
    cities = cities.replace(',', '');

    if (!cities.includes(name)) {
      if (cities.includes('##')) {
        cities = cities.split('##');

        const firstCityIsOlder =
          new Date(cities[0].split('-')[1]) < new Date(cities[1].split('-')[1]);

        cities[firstCityIsOlder ? 0 : 1] = `${
          !firstCityIsOlder ? '##' : ''
        }${name}-${new Date()}${firstCityIsOlder ? '##' : ''}`;
        cities = cities.join('');
      } else {
        cities += `##${name}-${new Date()}`;
      }

      document.cookie = `weatherCities=${cities}; expires=27 June ${
        new Date().getFullYear() - 10
      } 00:00:00`;

      document.cookie = `weatherCities=${cities}; expires=27 June ${
        new Date().getFullYear() + 10
      } 00:00:00`;
    }
  } else {
    document.cookie = `weatherCities=${name}-${new Date()}; expires=27 June ${
      new Date().getFullYear() + 10
    } 00:00:00`;
  }
}

function getStoredCities(): string[] {
  const storedCities: string[] = [];
  if (document.cookie.includes('weatherCities')) {
    const cookies = document.cookie.split(';');
    const weatherCities: string | string[] =
      cookies[cookies.findIndex(el => el.includes('weatherCities'))].split(
        '='
      )[1];

    if (weatherCities.includes('##')) {
      storedCities.push(weatherCities.split('##')[0].split('-')[0]);
      storedCities.push(weatherCities.split('##')[1].split('-')[0]);
    } else {
      storedCities.push(weatherCities.split('-')[0]);
    }
  }

  return storedCities;
}

function upperCaseFirstChars(text: string | string[]): string {
  text = (text as string).split(' ');

  text = text.length
    ? (text.map(word => {
        if (word[0]) {
          return word[0].toUpperCase() + word.substring(1);
        }
      }) as string[])
    : [];

  return text.join(' ');
}

async function getUserCoordinates() {
  const coordinates: Coords = await new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
        resolve({
          lon: longitude,
          lat: latitude,
        });
      },
      () => {
        resolve({
          lon: -0.1257,
          lat: 51.5085,
        });
      }
    );
  });

  return coordinates;
}

export {
  updateCookie,
  getCookieValue,
  getUserCoordinates,
  storeCity,
  getStoredCities,
  upperCaseFirstChars,
};

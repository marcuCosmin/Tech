import { City } from './Interfaces';

const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '&appid=30aead362a5895246c9829c3db4338db&units=metric';

const defaultCities: City[] = [
  {
    id: 2643743,
    name: 'London',
    country: 'GB',
  },
  {
    id: 292224,
    name: 'Dubai',
    country: 'AE',
  },
  {
    id: 2950158,
    name: 'Berlin',
    country: 'DE',
  },
  {
    id: 4350049,
    name: 'California',
    country: 'US',
  },
  {
    id: 5128638,
    name: 'New York',
    country: 'US',
  },
];

export { apiUrl, apiKey, defaultCities };

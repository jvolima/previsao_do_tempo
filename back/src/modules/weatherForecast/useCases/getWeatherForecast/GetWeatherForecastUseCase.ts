import dotenv from "dotenv"
import api from "../../../../services/api";

dotenv.config();

interface WeatherForecastResponse {
  city_name: string;
  temp: number;
  description: string;
  max: number;
  min: number;
}

export class GetWeatherForecastUseCase {
  async execute() {
    const apiGeoResponse = await api.get(`geoip?key=${process.env.API_KEY}&address=remote&precision=false`)

    const woeid = apiGeoResponse.data.results.woeid;

    const apiWeatherResponse = await api.get(`weather?woeid=${woeid}`);

    const data = apiWeatherResponse.data.results;

    const response: WeatherForecastResponse = {
      city_name: data.city_name,
      temp: data.temp,
      description: data.description,
      max: data.forecast[0].max,
      min: data.forecast[0].min
    }

    return response;
  }
}
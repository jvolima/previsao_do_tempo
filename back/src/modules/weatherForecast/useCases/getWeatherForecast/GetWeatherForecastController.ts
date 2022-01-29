import { Request, Response } from "express";
import { GetWeatherForecastUseCase } from "./GetWeatherForecastUseCase";

export class GetWeatherForecastController {
  async handle(request: Request, response: Response) {
    const getWeatherForecastUseCase = new GetWeatherForecastUseCase();

    const weatherForecastResponse = await getWeatherForecastUseCase.execute();

    return response.json(weatherForecastResponse);
  }
}
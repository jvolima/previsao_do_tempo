import { Router } from "express";
import { GetWeatherForecastController } from "./modules/weatherForecast/useCases/getWeatherForecast/GetWeatherForecastController";

const routes = Router();

const getWeatherForecastController = new GetWeatherForecastController();

routes.get("/previsao", getWeatherForecastController.handle);

export { routes }
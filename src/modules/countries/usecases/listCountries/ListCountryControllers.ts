import { Request, Response, response } from "express";
import { ListCountryUseCase } from "./ListCountryUseCase";
class ListCountriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCountries = new ListCountryUseCase();
    const allCountries = await listCountries.execute();
    return response.json(allCountries);
  }
}

export { ListCountriesController };

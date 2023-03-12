import { Router } from "express";
import { CreateCountryController } from "../modules/countries/usecases/createCountries/CreateCountryComtroller";
import { ListCountriesController } from "../modules/countries/usecases/listCountries/ListCountryControllers";

const countryRoutes = Router();
const createCountries = new CreateCountryController()
const listCountries = new ListCountriesController();
countryRoutes.post('/', createCountries.handle);
countryRoutes.get('/', listCountries.handle)
export {countryRoutes}
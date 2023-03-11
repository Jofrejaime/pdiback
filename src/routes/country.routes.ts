import { Router } from "express";
import { CreateCountryController } from "../modules/countries/usecases/createCountries/CreateCountryComtroller";

const countryRoutes = Router();
const createCountries = new CreateCountryController()
countryRoutes.post('/', createCountries.handle);
export {countryRoutes}
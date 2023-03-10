import { response, Router } from "express";
import { findRoutes } from "./fndUser.routes";
import { userRoutes } from "./user.routes";
import  express from "express";   
import { countryRoutes } from "./country.routes";
import { genderRoutes } from "./gender.routes";
import { areaRoutes } from "./area.routes";
import { languageRoutes } from "./language.routes";
import { toolRoutes } from "./tool.routes";
import { link } from "fs";
import { linkRoutes } from "./link.routes";
const routes = Router()
routes.use('/user', userRoutes)
routes.use("/list", findRoutes)
routes.use('/files',express.static("uploads") )
routes.use('/country', countryRoutes);
routes.use('/genre', genderRoutes);
routes.use('/area', areaRoutes);
routes.use('/language', languageRoutes)
routes.use('/tool', toolRoutes);
routes.use('link', linkRoutes)
export {routes}
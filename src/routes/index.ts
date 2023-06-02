import { response, Router } from "express";
import { userRoutes } from "./user.routes";
import  express from "express";   
import { countryRoutes } from "./country.routes";
import { genderRoutes } from "./gender.routes";
import { areaRoutes } from "./area.routes";
import { languageRoutes } from "./language.routes";
import { toolRoutes } from "./tool.routes";
import { linkRoutes } from "./link.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { ensureRoutes } from "./ensureRoutes";
import { projectRoutes } from "./project.routes";
import { messageRoutes } from "./message.routes";
import { notificationRoutes } from "./notification.routes";
import { starRoutes } from "./stars.routes";
import { viewRoutes } from "./views.routes";
const routes = Router()
routes.use('/user', userRoutes)
routes.use('/files',express.static("uploads") )
routes.use('/country', countryRoutes);
routes.use('/genre', genderRoutes);
routes.use('/area', areaRoutes);
routes.use('/star', starRoutes)
routes.use('/language', languageRoutes)
routes.use('/tool', toolRoutes);
routes.use('/link', linkRoutes)
routes.use('/view', viewRoutes)
routes.use(authenticateRoutes)
routes.use(ensureRoutes)
routes.use('/project', projectRoutes)
routes.use('/conversation', messageRoutes)
routes.use('/notification', notificationRoutes)
export {routes}
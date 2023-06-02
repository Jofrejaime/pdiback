import { Router } from "express";
import { ListViewsController } from "../modules/Project/useCases/View/ListViews/ListViewsController";

const viewRoutes = Router()
const listViews = new ListViewsController()
viewRoutes.get('/', listViews.handle)
export {viewRoutes}
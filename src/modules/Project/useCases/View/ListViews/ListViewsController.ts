import {Response, Request} from 'express'
import { ListViewsUseCase } from './ListViewsUseCase'
class ListViewsController{
 async handle(req: Request, res: Response) {
    const newListView = new ListViewsUseCase()
    const listViews = await newListView.execute()
    return res.status(200).json(listViews)
  }
}
export {ListViewsController}
import {  Router } from "express";

import { ensureAutenticatedUser } from "../modules/middlewares/ensureAuthenticatedUser";
import { ListConversationsController } from "../modules/conversation/listConversations/ListConversationsController";
import { ConversationController } from "../modules/conversation/sendMessage/CoversationController";

import { ListMessagesController } from "../modules/conversation/listMessages/ListMessagesController";
import { CreateAreaController } from "../modules/areas/useCases/createArea/CreateAreaComtroller";
import { FindConversationsController } from "../modules/conversation/findConversation/FindConversationController";
import { CreateConversationController } from "../modules/conversation/createConversation/CreateConversationController";

const messageRoutes = Router()
const sendMessage = new ConversationController()
const listConversations =  new ListConversationsController()
const listMessages =  new ListMessagesController()
const createConversation = new CreateConversationController()
const findConversations  = new FindConversationsController()
messageRoutes.post('/send/:conversation', ensureAutenticatedUser, sendMessage.handle)
messageRoutes.get('/messages/:id',listMessages.handle  )
messageRoutes.get('/room/:id', ensureAutenticatedUser,findConversations.handle)
messageRoutes.get('/:member', listConversations.handle)
messageRoutes.post('/create', ensureAutenticatedUser, createConversation.handle)
export {messageRoutes}
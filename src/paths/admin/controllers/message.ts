// import { Request, Response, NextFunction } from 'express'

// import Message from '../models/message'
// import MessageService from '../services/message'
// import {
//     NotFoundError,
//     BadRequestError,
//     InternalServerError,
//     UnauthorizedError,
// } from '../helpers/apiError'

// // GET /Messages
// export const findAll = async (req: Request, res: Response, next: NextFunction) => {
//     // console.log('body', req.user)
//     try {
//         res.json(await MessageService.findAll())
//     } catch (error) {
//         next(new NotFoundError('Messages not found', error))
//     }
// }

// export const findByQuery = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const query = req.query
//         // const getQuery = await Message.find({ id: query })
//         res.json(await MessageService.findByQuery(query))
//         console.log('query', req.query)
//     } catch (error) {
//         next(new NotFoundError('Messages not found', error))
//     }
// }

// // GET /Messages/:id
// export const findById = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         console.log('params', req.params.id)
//         res.json(await MessageService.findById(req.params.id))
//     } catch (error) {
//         next(new NotFoundError(`Message ${req.params.id} not found`, error))
//     }
// }

// //POST /Messages
// export const createMessage = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id, name, category, variant } = req.body

//         const foundName = await Message.findOne({ name: req.body.name })
//         if (!foundName) {
//             const newMessage = new Message({
//                 name,
//                 category,
//                 variant,
//             })
//             await MessageService.createMessage(newMessage)
//             res.json(newMessage)
//         } else {
//             res.json(`The name ${req.body.name} created, please choose other name`)
//         }
//     } catch (error) {
//         if (error.name === 'ValidationError') {
//             next(new BadRequestError('Invalid Request', error))
//         } else if (error.name === 'UnauthorizedError') {
//             next(new UnauthorizedError('Unauthorized Error', error))
//         } else {
//             next(new InternalServerError('Internal Server Error', error))
//         }
//     }
// }

// // PUT /Messages/:id
// // export const updateMessage = async (
// //     req: Request,
// //     res: Response,
// //     next: NextFunction
// // ) => {
// //     try {
// //         const update = req.body
// //         const MessageId = req.params.id
// //         const MessageUpdate = await MessageService.updateScrap(MessageId, update)
// //         res.json(MessageUpdate)
// //     } catch (error) {
// //         next(new NotFoundError('Message not found', error))
// //     }
// // }

// // DELETE /Messages/:id
// export const deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         await MessageService.deleteMessage(req.params.id)
//         res.status(204).end()
//     } catch (error) {
//         next(new NotFoundError('Message not found', error))
//     }
// }

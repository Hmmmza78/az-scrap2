import { Request, Response, NextFunction } from 'express'

import Scrap, { scrapDocument } from '../../../models/scrap'
import { ScrapService } from '../../../services/'
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
  UnauthorizedError,
} from '../../../helpers/apiError'

// GET /products
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log('body', req.user)
  try {
    res.json(await ScrapService.findAll())
  } catch (error) {
    next(new NotFoundError('Products not found', error))
  }
}

export const findByQuery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query
    // const getQuery = await Product.find({ id: query })
    res.json(await ScrapService.findByQuery(query))
    console.log('query', req.query)
  } catch (error) {
    next(new NotFoundError('Products not found', error))
  }
}

// GET /products/:id
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log('params', req.params.id)
    res.json(await ScrapService.findById(req.params.id))
  } catch (error) {
    next(new NotFoundError(`Product ${req.params.id} not found`, error))
  }
}

//POST /products
export const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, weight, price, phone, photos, address, category } = req.body as scrapDocument


    const record = new Scrap({
      title, description, weight, price, phone, photos, address, category
    });
    await ScrapService.create(record)
    return res.json({ data: record })
  } catch (error) {
      next(new BadRequestError('Invalid Request', error))
  }
}

// PUT /products/:id
export const updateRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const scrapId = req.params.id
    const scrapUpdate = await ScrapService.updateById(scrapId, update)
    res.json({ data: scrapUpdate })
  } catch (error) {
    next(new NotFoundError('Product not found', error))
  }
}

// DELETE /products/:id
export const deleteRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await ScrapService.deleteById(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('Product not found', error))
  }
}

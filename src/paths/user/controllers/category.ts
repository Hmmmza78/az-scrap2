import { Request, Response, NextFunction } from 'express'

import { categoryDocument } from '../../../models/category'
import { CategoryService } from '../../../services/'
import { NotFoundError, BadRequestError, InternalServerError, } from '../../../helpers/apiError'

// POST /categories
export const create = async (req: Request, res: Response, next: NextFunction
) => {
  try {
    const { name } = req.body as categoryDocument;
    const old = await CategoryService.findByQuery({ name });
    if (old != null) {
      return next(new BadRequestError('Category already exists'));
    }
    const record = await CategoryService.create(req["validData"])
    res.json({ data: record })
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

// PUT /category/:categoryId
export const updateRecord = async (req: Request, res: Response, next: NextFunction
) => {
  try {
    const update = req.body
    const id = req.params.id
    const updatedCategory = await CategoryService.updateById(id, update)
    res.json({ data: updatedCategory })
  } catch (error) {
    next(new NotFoundError('Category not found', error))
  }
}

// DELETE /category/:id
export const deleteRecord = async (req: Request, res: Response, next: NextFunction
) => {
  try {
    await CategoryService.deleteById(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('Category not found', error))
  }
}

// GET /category/:id
export const findById = async (req: Request, res: Response, next: NextFunction
) => {
  try {
    res.json(await CategoryService.findById(req.params.id))
  } catch (error) {
    next(new NotFoundError(`Category ${req.params.id} not found`, error))
  }
}

// GET /category
export const findAll = async (req: Request, res: Response, next: NextFunction
) => {
  try {
    res.json(await CategoryService.findAll())
  } catch (error) {
    next(new NotFoundError('category not found', error))
  }
}


export const findByQuery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query } = req.query;
    res.json(await CategoryService.findByQuery(query))
  } catch (error) {
    next(new NotFoundError('category not found', error))
  }
}

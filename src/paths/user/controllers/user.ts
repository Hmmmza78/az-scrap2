import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'
export { }

import User, { userDocument } from '../../../models/user'
import { UserService } from '../../../services/'
import { NotFoundError, BadRequestError, ValidationError } from '../../../helpers/apiError'
// import { createToken, verifyJWT, requireAdminandVerifyJWT } from './auth'

// GET /users
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await User.find())
  } catch (error) {
    console.log(error);

    next(new NotFoundError('Users not found', error))
  }
}

// POST check phone
export const checkPhone = async (
  req: Request,
  res: Response,
  next: NextFunction) => {
  try {
    let { phone } = req.body;
    const oldData = await User.findOne({ phone });
    if (oldData) {
      return res.json({
        message: "Phone is already registered",
        data: oldData,
      });
    }
    return res.json({
      message: "Phone is not registered",
      data: null,
    });
  } catch (err) {
    next(new BadRequestError("Invalid Phone number", err))
  }
}


//PUT /users/updateProfile
export const updateRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })
    const userID = user?._id

    await UserService.updateById(userID, req.body)
    res.json(req.body)
  } catch (error) {
    next(new NotFoundError('Record not found', error))
  }
}

export const deleteRecord = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.params as { email: string };
    await UserService.deleteByFilter({ email });
    return res.json({
      status: "success",
      message: "User deleted"
    })
  } catch (err) {
    next(new NotFoundError('Record not found', err))
  }
}


export const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params as { id: string };
    const user = await UserService.findById(id)
    return res.json({ status: "success", data: user })
  } catch (err) {
    next(new NotFoundError('Record not found', err))
  }
}

export const findByQuery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query } = req.params as { query: string };
    const user = await UserService.findByQuery(query)
    return res.json({ status: "success", data: user })
  } catch (err) {
    next(new NotFoundError('Record not found', err))
  }
}


export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone } = req.body as userDocument;
    const old = await UserService.findOne({ phone });
    if (old != null) {
      return next(new BadRequestError("This phone already exists"));
    }
    const data = await UserService.create(req["validData"]);
    return res.json({ status: "success", data });
  } catch (error) {
    console.log(error.message);

    return next(new ValidationError("Invalid fields: " + JSON.stringify(error)));
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone } = req.body;
    const data = await UserService.findOne({ phone });
    if (data == null) {
      return next(new NotFoundError("No records found"));
    }
    return res.json({ status: "success", data })
  } catch (error) {
    return next(new ValidationError("Invalid phone number or password", error));
  }
}

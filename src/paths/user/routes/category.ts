import express, { Request, Response, NextFunction } from "express";
import { findAll, findById, findByQuery, create } from "../controllers/category";
import { validateInputs } from "../../../middlewares/validate";
// import { validateInputs } from "../../../middlewares/validate";
const router = express.Router();


router.post("/create", validateInputs([]), create)
router.get("/getAll", findAll);
router.get("/getByQuery", findByQuery);
router.get("/getById/:id", findById);

export default router;

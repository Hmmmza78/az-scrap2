import express, { Request, Response, NextFunction } from "express";
import { findAll, findById, findByQuery, } from "../controllers/user";
import { validateInputs } from "../../../middlewares/validate";
// import { validateInputs } from "../../../middlewares/validate";
const router = express.Router();



router.post("/register", validateInputs);
router.post("/register", validateInputs);

router.get("/getAll", findAll);
router.get("/getByQuery", findByQuery);
router.get("/getById/:id", findById);

export default router;

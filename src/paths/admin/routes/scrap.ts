import express, { Request, Response, NextFunction } from "express";
import { findAll, findById, findByQuery, create } from "../controllers/scrap";
import { validateInputs } from "../../../middlewares/validate";
// import { validateInputs } from "../../../middlewares/validate";
const router = express.Router();


router.post("/create", validateInputs(["title", "description", "weight", "price", "phone", "photos", "address", "category"]), create)
router.get("/getAll", findAll);
router.get("/getByQuery", findByQuery);
router.get("/getById/:id", findById);

export default router;

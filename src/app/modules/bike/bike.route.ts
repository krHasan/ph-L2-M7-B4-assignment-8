import express from "express";
import { BikeController } from "./bike.controller";

const router = express.Router();

router.post("/", BikeController.createBike);
router.get("/", BikeController.getAllBike);
router.get("/:id", BikeController.getBikeById);

export const BikeRoutes = router;

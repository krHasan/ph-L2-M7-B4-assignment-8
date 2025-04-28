import express from "express";
import { ServiceRecordController } from "./bikeService.controller";

const router = express.Router();

router.post("/", ServiceRecordController.createServiceRecord);
router.get("/", ServiceRecordController.getAllServiceRecord);
router.get("/status", ServiceRecordController.getServiceRecordStatus);
router.get("/:id", ServiceRecordController.getServiceRecordById);
router.put("/:id/complete", ServiceRecordController.updateServiceRecordData);

export const ServiceRecordRoutes = router;

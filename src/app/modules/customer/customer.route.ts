import express from "express";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post("/", CustomerController.createCustomer);
router.get("/", CustomerController.getAllCustomer);
router.get("/:id", CustomerController.getCustomerById);
router.put("/:id", CustomerController.updateCustomerData);
router.delete("/:id", CustomerController.deleteCustomerData);

export const CustomerRoutes = router;

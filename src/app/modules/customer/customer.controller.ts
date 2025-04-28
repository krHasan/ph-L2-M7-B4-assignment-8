import catchAsync from "../../utils/catchAsync";
import { httpStatus } from "../../utils/httpStatus";
import sendResponse from "../../utils/sendResponse";
import { CustomerServices } from "./customer.service";

const createCustomer = catchAsync(async (req, res) => {
    const customerData = req.body;
    const result = await CustomerServices.createCustomerIntoDB(customerData);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Customer created successfully",
        data: result,
    });
});

const getAllCustomer = catchAsync(async (req, res) => {
    const result = await CustomerServices.getAllCustomerFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result,
    });
});

const getCustomerById = catchAsync(async (req, res) => {
    const result = await CustomerServices.getCustomerByIdFromDB(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer fetched successfully",
        data: result,
    });
});

const updateCustomerData = catchAsync(async (req, res) => {
    const result = await CustomerServices.updateCustomerDataIntoDB(req.params.id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer updated successfully",
        data: result,
    });
});

const deleteCustomerData = catchAsync(async (req, res) => {
    const result = await CustomerServices.deleteCustomerDataFromDB(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer deleted successfully",
    });
});

export const CustomerController = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    updateCustomerData,
    deleteCustomerData,
};

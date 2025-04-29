import catchAsync from "../../utils/catchAsync";
import { httpStatus } from "../../utils/httpStatus";
import sendResponse from "../../utils/sendResponse";
import { ServiceRecordServices } from "./bikeService.service";

const createServiceRecord = catchAsync(async (req, res) => {
    const serviceRecordData = req.body;
    const result = await ServiceRecordServices.createServiceRecordIntoDB(serviceRecordData);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Service record created successfully",
        data: result,
    });
});

const getAllServiceRecord = catchAsync(async (req, res) => {
    const result = await ServiceRecordServices.getAllServiceRecordFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
});

const getServiceRecordStatus = catchAsync(async (req, res) => {
    const result = await ServiceRecordServices.getServiceRecordStatusFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    });
});

const getServiceRecordById = catchAsync(async (req, res) => {
    const result = await ServiceRecordServices.getServiceRecordByIdFromDB(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result,
    });
});

const updateServiceRecordData = catchAsync(async (req, res) => {
    const completionDate = req.body?.completionDate ? req.body?.completionDate : new Date();
    const result = await ServiceRecordServices.updateServiceRecordDataIntoDB(req.params.id, {
        completionDate,
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service marked as completed",
        data: result,
    });
});

export const ServiceRecordController = {
    createServiceRecord,
    getAllServiceRecord,
    getServiceRecordStatus,
    getServiceRecordById,
    updateServiceRecordData,
};

import catchAsync from "../../utils/catchAsync";
import { httpStatus } from "../../utils/httpStatus";
import sendResponse from "../../utils/sendResponse";
import { BikeServices } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
    const bikeData = req.body;
    const result = await BikeServices.createBikeIntoDB(bikeData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike added successfully",
        data: result,
    });
});

const getAllBike = catchAsync(async (req, res) => {
    const result = await BikeServices.getAllBikeFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result,
    });
});

const getBikeById = catchAsync(async (req, res) => {
    const result = await BikeServices.getBikeByIdFromDB(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike fetched successfully",
        data: result,
    });
});

export const BikeController = {
    createBike,
    getAllBike,
    getBikeById,
};

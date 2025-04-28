import prisma from "../../config/prisma";
import AppError from "../../errors/AppError";
import { httpStatus } from "../../utils/httpStatus";

const createBikeIntoDB = async (payload: {
    brand: string;
    model: string;
    year: number;
    customerId: string;
}) => {
    const isCustomerExists = await prisma.customer.findFirst({
        where: {
            customerId: payload.customerId,
        },
    });

    if (!isCustomerExists) {
        console.log(isCustomerExists);
        throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
    }

    const result = await prisma.bike.create({
        data: payload,
    });

    return result;
};

const getAllBikeFromDB = async () => {
    const result = await prisma.bike.findMany();

    return result;
};

const getBikeByIdFromDB = async (id: string) => {
    const result = await prisma.bike.findFirst({
        where: {
            bikeId: id,
        },
    });

    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, "Bike not found");
    }

    return result;
};

export const BikeServices = {
    createBikeIntoDB,
    getAllBikeFromDB,
    getBikeByIdFromDB,
};

import { ServiceRecord, ServiceStatus } from "@prisma/client";
import prisma from "../../config/prisma";
import AppError from "../../errors/AppError";
import { httpStatus } from "../../utils/httpStatus";
import { subDays } from "date-fns";

const createServiceRecordIntoDB = async (payload: {
    bikeId: string;
    serviceDate: Date;
    description: string;
    status: ServiceStatus;
}) => {
    const isBikeDataExists = await prisma.bike.findFirst({
        where: {
            bikeId: payload.bikeId,
        },
    });

    if (!isBikeDataExists) {
        throw new AppError(httpStatus.NOT_FOUND, "Bike not found");
    }

    const result = await prisma.serviceRecord.create({
        data: payload,
    });

    return result;
};

const getAllServiceRecordFromDB = async () => {
    const result = await prisma.serviceRecord.findMany();

    return result;
};

const getServiceRecordStatusFromDB = async () => {
    const sevenDaysAgo = subDays(new Date(), 7);

    const result = await prisma.serviceRecord.findMany({
        where: {
            OR: [{ status: ServiceStatus.pending }, { status: ServiceStatus.in_progress }],
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });

    return result;
};

const getServiceRecordByIdFromDB = async (id: string) => {
    const result = await prisma.serviceRecord.findFirst({
        where: {
            serviceId: id,
        },
    });

    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, "Service Record not found");
    }

    return result;
};

const updateServiceRecordDataIntoDB = async (id: string, payload: Partial<ServiceRecord>) => {
    const isServiceRecordExists = await prisma.serviceRecord.findFirst({
        where: {
            serviceId: id,
        },
    });

    if (!isServiceRecordExists) {
        throw new AppError(httpStatus.NOT_FOUND, "Service Record not found");
    }

    const result = await prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            completionDate: payload.completionDate,
            status: ServiceStatus.done,
        },
    });

    return result;
};

export const ServiceRecordServices = {
    createServiceRecordIntoDB,
    getAllServiceRecordFromDB,
    getServiceRecordStatusFromDB,
    getServiceRecordByIdFromDB,
    updateServiceRecordDataIntoDB,
};

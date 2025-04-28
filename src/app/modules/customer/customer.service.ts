import { Customer } from "@prisma/client";
import prisma from "../../config/prisma";
import AppError from "../../errors/AppError";
import { httpStatus } from "../../utils/httpStatus";

const createCustomerIntoDB = async (payload: { name: string; email: string; phone: string }) => {
    try {
        const result = await prisma.customer.create({
            data: payload,
        });

        return result;
    } catch (error) {
        throw new AppError(httpStatus.UNPROCESSABLE_ENTITY, "Could not create new customer");
    }
};

const getAllCustomerFromDB = async () => {
    const result = await prisma.customer.findMany();

    return result;
};

const getCustomerByIdFromDB = async (id: string) => {
    const result = await prisma.customer.findFirst({
        where: {
            customerId: id,
        },
    });

    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
    }

    return result;
};

const updateCustomerDataIntoDB = async (id: string, payload: Partial<Customer>) => {
    const isCustomerExists = await prisma.customer.findFirst({
        where: {
            customerId: id,
        },
    });

    if (!isCustomerExists) {
        throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
    }

    const result = await prisma.customer.update({
        where: {
            customerId: id,
        },
        data: {
            name: payload.name,
            phone: payload.phone,
        },
    });

    return result;
};

const deleteCustomerDataFromDB = async (id: string) => {
    const isCustomerExists = await prisma.customer.findFirst({
        where: {
            customerId: id,
        },
    });

    if (!isCustomerExists) {
        throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
    }

    const result = await prisma.customer.delete({
        where: {
            customerId: id,
        },
    });

    return result;
};

export const CustomerServices = {
    createCustomerIntoDB,
    getAllCustomerFromDB,
    getCustomerByIdFromDB,
    updateCustomerDataIntoDB,
    deleteCustomerDataFromDB,
};

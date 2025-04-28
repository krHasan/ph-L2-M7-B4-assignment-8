/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import cookieParser from "cookie-parser";
import notFound from "./app/middlewares/notFound";
import { httpStatus } from "./app/utils/httpStatus";
import config from "./app/config";
import router from "./app/routes";
const app: Application = express();

//parser
// app.use(cors());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    const currentDateTime = new Date().toISOString();
    const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    res.status(httpStatus.OK).json({
        success: true,
        message: `Welcome to the ${config.app.application_name}`,
        version: `${config.app.application_version}`,
        clientDetails: {
            ipAddress: clientIp,
            accessedAt: currentDateTime,
        },
    });
});

//api versions
app.use("/api", router);

app.use(globalErrorHandler as (err: any, req: Request, res: Response, next: NextFunction) => any);

app.use(notFound as (req: Request, res: Response, next: NextFunction) => any);

declare global {
    interface BigInt {
        // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
        toJSON(): Number;
    }
}

BigInt.prototype.toJSON = function () {
    return Number(this);
};

export default app;

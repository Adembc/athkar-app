import { NextFunction, Request, Response } from "express";
import AdhkarRepo from "../database/repository/adhkarRepo";
import catchAsync from "../errorHandler/catchAsync";
import ClientError from "../errorHandler/ClientError";
import { qs } from "../database/repository/adhkarRepo";

export const getAdhkar = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query: any = req.query;
    const data = await AdhkarRepo.findAll(query);
    if (!data) return next(new ClientError("can not get data", 500));
    res.status(200).json({
      code: 200,
      status: "success",
      results: data.length,
      payload: data,
    });
  }
);

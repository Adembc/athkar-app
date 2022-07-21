import { NextFunction, Request, Response } from "express";
import AdhkarRepo from "../database/repository/adhkarRepo";
import catchAsync from "../errorHandler/catchAsync";
import ClientError from "../errorHandler/ClientError";
import { qs } from "../database/repository/adhkarRepo";

export const customAdhkar = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.query.category == "أذكار الصلاة") {
    req.query.category = {
      $in: [
        "دعاء الاستفتاح",
        "دعاء الركوع",
        "دعاء الرفع من الركوع",
        "دعاء السجود",
        "دعاء الجلسة بين السجدتين",
        "دعاء سجود التلاوة",
        "التشهد",
        "الدعاء بعد التشهد الأخير قبل السلام",
      ],
    };
  } else if (req.query.category == "other") {
    req.query.category = {
      nin: [
        "دعاء الاستفتاح",
        "دعاء الركوع",
        "دعاء الرفع من الركوع",
        "دعاء السجود",
        "دعاء الجلسة بين السجدتين",
        "دعاء سجود التلاوة",
        "التشهد",
        "الدعاء بعد التشهد الأخير قبل السلام",
        "أذكار الصباح",
        "أذكار المساء",
        "الرُّقية الشرعية من السنة النبوية",
        "الرُّقية الشرعية من القرآن الكريم",
        "أذكار النوم",
        "أذكار الاستيقاظ من النوم",
        "الأذكار بعد السلام من الصلاة",
      ],
    };
  }

  next();
};
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

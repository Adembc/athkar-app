import APIFeatures from "../../helper/ApiFeatures";
import Dheker, { DhekerModel } from "../model/adhkarModel";
export type qs = {
  sort: string;
  page: number;
  limit: number;
  fields: string;
};
export default class AdhkarRepo {
  public static async findAll(filter: qs): Promise<Dheker[]> {
    const features = new APIFeatures(DhekerModel.find(), filter)
      .filter()
      .sort()
      .paginate()
      .limitFields();

    return await features.query.lean();
  }
}

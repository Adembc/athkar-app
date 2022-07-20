import { model, Schema, Document } from "mongoose";

export const DOCUMENT_NAME = "Dheker";
export const COLLECTION_NAME = "azkar";

export default interface Dheker extends Document {
  category: string;
  count: number;
  description: string;
  reference: string;
  zekr: string;
}

const schema = new Schema(
  {
    category: { type: String, required: true },
    count: { type: Number, default: 0 },
    description: String,
    reference: String,
    zekr: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
export const DhekerModel = model<Dheker>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);

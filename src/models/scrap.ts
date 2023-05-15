import mongoose, { Document } from 'mongoose'
import autopopulate from "mongoose-autopopulate"

export type scrapDocument = Document & {
  title: string;
  description: string;
  weight: string;
  price: string;
  phone: string;
  photos: string[];
  address: string;
  user: string;
  category: string;
}

const scrapSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    photos: {
      type: Array,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      autopopulate: true,
    },
    status: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
)

scrapSchema.plugin(autopopulate)

export default mongoose.model<scrapDocument>('Scrap', scrapSchema)

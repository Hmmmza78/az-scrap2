import mongoose, { Document } from 'mongoose'

export type categoryDocument = Document & {
  name: string;
  image: string;
  parent: string;
}

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  image: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    required: false,
    default: "",
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model<categoryDocument>('Category', categorySchema)

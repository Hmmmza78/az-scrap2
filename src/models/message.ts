import mongoose, { Document } from 'mongoose'
import autopopulate from "mongoose-autopopulate"

export type messageDocument = Document & {
  message: string;
  user: string;
  from: string[];
  scrapId: string;
}

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      index: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
    from: {
      type: String,
      required: true,
    },
    scrapId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Scrap',
      autopopulate: true,
    },
    status: {
      type: String,
      default: 'pending',
    }
  },
  { timestamps: true }
)

messageSchema.plugin(autopopulate)

export default mongoose.model<messageDocument>('message', messageSchema)

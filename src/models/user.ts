import mongoose, { Document } from 'mongoose'
// import { isEmail } from 'validator'

export type userDocument = Document & {
  name: string;
  email: string;
  phone: string;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  { timestamps: true }
)

export default mongoose.model<userDocument>('User', userSchema);

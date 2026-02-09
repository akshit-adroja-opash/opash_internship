import mongoose, { Document, Schema } from 'mongoose';

export interface IInvestment extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  amount: number;
  type: string;
  date: Date;
  description?: string;
  createdAt: Date;
}

const InvestmentSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IInvestment>('Investment', InvestmentSchema);

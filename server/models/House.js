import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    bedrooms: { type: float, required: true },
    batchrooms: { type: float, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true, default: 0 },
    description: { type: String, default: 'No Description Provided' },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

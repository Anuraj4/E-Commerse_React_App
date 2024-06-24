import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  products: {
    type: mongoose.ObjectId,
    ref: 'Product'
  },
  payment: {},
  buyers: {
    type: mongoose.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    default: 'Not processed',
    enum: ['Not processes', 'Processing', 'Shipped', 'Delivered', 'Cancel']

  }
}, { timestamps: true });
export default mongoose.model('order', orderSchema);

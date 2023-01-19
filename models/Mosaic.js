import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const mosaicCatalogSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    price: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    shortDesc: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);

const mosaicCatalog = model('mosaicCatalog', mosaicCatalogSchema);

export default mosaicCatalog;

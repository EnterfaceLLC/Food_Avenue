// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CartProduct, Product } = initSchema(schema);

export {
  CartProduct,
  Product
};
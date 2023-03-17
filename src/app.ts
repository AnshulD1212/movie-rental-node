import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schemas/schema';
import { logger } from './helpers/logger';
import { customerRoutes } from './customer/customer.routes';

export const expressAPI = (): express.Application => {
  const api = express();
  api.use(express.json());
  api.use(express.urlencoded({ extended: true }));
  api.use('/customer', customerRoutes);
  api.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );
  return api;
};

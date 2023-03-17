import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} from 'graphql';
import { find } from 'lodash';

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: {
    customer_id: { type: GraphQLInt },
    store_id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    address_id: { type: GraphQLInt },
    active: { type: GraphQLInt },
    create_date: { type: GraphQLString },
    last_update: { type: GraphQLString },
    activebool: { type: GraphQLBoolean }
  }
});

const customers = [
  {
    customer_id: 1,
    store_id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com',
    address_id: 1,
    active: 1,
    create_date: '2019-01-01',
    last_update: '2019-01-01',
    activebool: true
  },
  {
    customer_id: 2,
    store_id: 2,
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane@doe.com',
    address_id: 2,
    active: 1,
    create_date: '2022-02-03',
    last_update: '2022-03-03',
    activebool: true
  }
];

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        customer_id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return find(customers, { customer_id: args.customer_id });
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery
});

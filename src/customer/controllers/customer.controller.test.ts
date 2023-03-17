import { mockCustomers } from '../../__mocks__/customer.mock';
import { getCustomersController } from './customer.controller';
import { expressAPI } from '../../app';
import supertest from 'supertest';
import { getCustomers } from '../services/customer.service';
import { StatusCodes } from 'http-status-codes';

jest.mock('../services/customer.service');

const app = expressAPI();
describe('get all customers', () => {
  const request = supertest(app);
  it('should return all customers', async () => {
    (getCustomers as jest.Mock).mockResolvedValue(mockCustomers);
    return request
      .get('/customer')
      .expect(StatusCodes.OK)
      .expect(({ body }) => {
        expect(body).toHaveLength(2);
        expect(body).toMatchObject(mockCustomers);
      });
  });
});

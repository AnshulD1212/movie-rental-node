import * as customerRepository from '../repository/customer.repository';
import { Customer } from '../../types/customer';
import { mockCustomers } from '../../__mocks__/customer.mock';
import { getCustomers } from './customer.service';

jest.mock('../repository/customer.repository');

describe('get all customers', () => {
  it('should return all customers', async () => {
    jest
      .spyOn(customerRepository, 'getCustomers')
      .mockResolvedValue(mockCustomers);
    const customers = await getCustomers();
    expect(customers).toMatchObject(mockCustomers);
  });
});

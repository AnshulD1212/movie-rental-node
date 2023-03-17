import { logger } from '../../helpers/logger';
import { Customer } from '../../types/customer';
import * as customerRepository from '../repository/customer.repository';

export const getCustomers = async (): Promise<Customer[]> => {
  try {
    return await customerRepository.getCustomers();
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

export const getCustomerById = async (id: number): Promise<Customer> => {
  try {
    return await customerRepository.getCustomerById(id);
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

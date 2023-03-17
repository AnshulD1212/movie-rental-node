import { Customer } from '../types/customer';

export const mockCustomers: Customer[] = [
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

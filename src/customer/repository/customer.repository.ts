import { pool } from '../../db/postgres';
import { Customer } from '../../types/customer';

const CUSTOMER_TABLE = '"public"."customer"';

export const getCustomers = async (): Promise<Customer[]> => {
  const queryResponse = await pool.query(`SELECT * FROM ${CUSTOMER_TABLE}`);
  return queryResponse.rows;
};

export const getCustomerById = async (id: number): Promise<Customer> => {
  const queryResponse = await pool.query(
    `SELECT * FROM ${CUSTOMER_TABLE} WHERE customer_id = $1`,
    [id]
  );
  return queryResponse.rows[0];
};

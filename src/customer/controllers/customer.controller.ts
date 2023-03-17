import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getCustomers } from '../services/customer.service';

export const getCustomersController = async (req: Request, res: Response) => {
  try {
    const customers = await getCustomers();
    return res.status(StatusCodes.OK).send(customers);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
  }
};

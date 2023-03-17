import express from 'express';
import { handleErrors } from '../helpers/handleErrors';
import { getCustomersController } from './controllers/customer.controller';

const router: express.Router = express.Router();

router.get('/', handleErrors(getCustomersController));

export const customerRoutes = router;

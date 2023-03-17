import { expressAPI } from './app';
import { logger } from './helpers/logger';

expressAPI().listen(3000, () => {
  logger.info(`Server started! on port 3000`);
});

import { pino } from 'pino'
import { pinoOptions } from '../../settings/logger.settings.js'

export const logger = pino(pinoOptions)

logger.info(`🧰 Initializing logger manager...`)

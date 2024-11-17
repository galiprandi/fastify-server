import { pino } from 'pino'

const loggerOptions: Parameters<typeof pino>[0] = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
}

export const logger = pino(loggerOptions)

logger.info(`🧰 Initializing logger manager.`)

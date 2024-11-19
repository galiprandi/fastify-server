import { LoggerOptions } from 'pino'

export const pinoOptions: LoggerOptions = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      colorizeObjects: true,
      singleLine: true,
      ignore: 'reqId',
    },
  },
}

# Fastify Server

A Modern Fastify Server built with TypeScript.

## Description

This project is a Fastify server that includes a health check endpoint and uses Pino for logging.

## Requirements

- Node.js 22.x

## Features

- Fastify server with TypeScript.
- Health check endpoint.
- Pino logging.
- Environment variables configuration.

## Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:galiprandi/fastify-server.git
   cd fastify-server

   ```

2. Install dependencies using pnpm:

   ```sh
   pnpm install
   ```

## Usage

### Development

To start the server in development mode with auto-reloading:

```sh
pnpm run dev
```

### Production

To build and start the server in production mode:

```sh
pnpm run build
pnpm start
```

## Configuration

The server configuration can be set using environment variables. Create a `.env` file in the root directory based on the `env.sample` file.

## Endpoints

- GET /health: Returns the health status of the server.

## Logging

Logging is handled by Pino. The logger configuration can be found in src/lib/logger/pino.ts.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Germán Aliprandi

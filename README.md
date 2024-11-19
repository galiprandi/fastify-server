# 🚀 Fastify Server

A Modern Fastify Server built with TypeScript.

## ✨ Description

This project is a Fastify server that includes a health check endpoint and uses Pino for logging.

## 🔧 Requirements

- Node.js 22.x
- pnpm

## 🎯 Features

- Fastify server with TypeScript.
- Health check endpoint.
- Pino logging.
- Environment variables configuration.

## 📥 Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:galiprandi/fastify-server.git
   cd fastify-server

   ```

2. Install dependencies using pnpm:

   ```sh
   pnpm install
   ```

## 💻 Usage

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

## ⚙️ Configuration

The server configuration can be set using environment variables. Create a `.env` file in the root directory based on the `env.sample` file.

## 🛣️ Endpoints

- `GET /health`: Returns the health status of the server.

## 📝 Logging

Logging is handled by Pino. The logger configuration can be found in src/lib/logger/pino.ts.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run the tests: `pnpm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

Please make sure to:

- Follow the existing code style
- Add tests if applicable
- Update documentation as needed
- Follow the Conventional Commits specification

## 🐛 Bug Reports

If you find a bug, please open an issue with:

- A clear title and description
- As much relevant information as possible
- A code sample or test case demonstrating the bug

## 👤 Author

### Germán Aliprandi

- GitHub: @galiprandi
- LinkedIn: Germán Aliprandi

## 🌟 Support

Give a ⭐️ if this project helped you!

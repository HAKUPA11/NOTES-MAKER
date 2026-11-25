## Stage 1: Foundation, Express Server & REST Concepts

### What I Built
- Initialized a Node project with `npm init -y` and installed `express` and `nodemon`.
- Built a basic server in `server.js` using `express()`, `app.get('/', (req, res) => res.send('hello world'))`, and `app.listen(3000)`.
- Added `.env` and `.gitignore` conventions and studied REST API fundamentals.

### Key Concepts Learned
- **`package.json` & `npm init -y`**: Tracks project metadata and dependencies so environments stay reproducible.
- **Server & Express**: A server listens for network requests and replies; Express simplifies routing and request/response handling over raw Node HTTP.
- **`require` vs `import`**: CommonJS (`require`) is widely used in legacy/existing Node projects; ES modules (`import`) are the newer standard.
- **`app = express()` & `app.listen(3000)`**: `express()` creates the app instance; `app.listen()` opens port `3000` to accept incoming requests.
- **`nodemon`**: Restarts the server automatically on file changes during local development.
- **HTTP Methods (`GET`, `POST`, `PATCH`, `DELETE`)**: Express intent—read, create, partial update, delete.
- **Route Callback, `req`, and `res`**: Express calls the handler when a route matches; `req` holds incoming request data, and `res` sends the response back to the client.
- **`.env` & `.gitignore`**: `.env` isolates config/secrets; `.gitignore` prevents secrets and `node_modules` from being committed to Git.
- **REST APIs**: Built around **resources** (e.g., notes), **representations** (e.g., JSON), **stateless** requests, **HTTP methods**, and **status codes**.

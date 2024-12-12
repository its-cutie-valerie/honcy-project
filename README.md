# Honk Compendium API 🦢

The **Honk Compendium API** is a backend service that provides random goose facts and allows for adding, deleting, and retrieving facts. Built for the **HONC Hackathon**, this project uses the HONC stack: **Hono**, **Drizzle ORM**, **Neon**, and Cloudflare Workers.

## Features ✨

- 🪶 **Random Goose Facts:** Retrieve random goose facts with a single API call.
- 📚 **Fact Management:** Add, delete, and view goose facts.
- 🚀 **Serverless Deployment:** Powered by Cloudflare Workers for high performance and scalability.
- 🛠️ **Database Integration:** Uses Neon as a serverless PostgreSQL database.
- 🌐 **CORS-Enabled:** Secure cross-origin requests.

---

## Tech Stack 🛠️

- **Framework:** [Hono](https://hono.dev) - A lightweight web framework for Cloudflare Workers.
- **Database:** [Neon](https://neon.tech) - Serverless PostgreSQL.
- **ORM:** [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - Type-safe ORM for modern applications.
- **Cloud Platform:** [Cloudflare Workers](https://workers.cloudflare.com) - Serverless application hosting.

---

## API Endpoints 📡

### Base URL: 
- **Local Development:** `http://127.0.0.1:8787`
- **Production:** `https://honk-compendium.your-domain.workers.dev`

### Routes:

1. **GET `/facts`**
   - **Description:** Fetch all goose facts with pagination support.
   - **Query Parameters:**
     - `page` (optional): Page number (default: `1`).
     - `limit` (optional): Number of facts per page (default: `10`).
   - **Response:** Array of facts.
   - **Example:**
     ```json
     [
       {
         "id": "123",
         "fact": "Geese honk to communicate during flight.",
         "source": "Nature Journal",
         "created_at": "2024-12-12T00:00:00Z"
       }
     ]
     ```

2. **GET `/facts/random`**
   - **Description:** Fetch a random goose fact.
   - **Response:** A single random fact.

3. **POST `/facts`**
   - **Description:** Add a new goose fact.
   - **Body:**
     ```json
     {
       "fact": "Geese mate for life.",
       "source": "Wildlife Magazine"
     }
     ```
   - **Response:** Newly created fact.

4. **DELETE `/facts/:id`**
   - **Description:** Delete a goose fact by ID.
   - **Response:** Success message.

---

## Installation and Setup 🚀

### Prerequisites

- [Node.js](https://nodejs.org) (v16 or later)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [PostgreSQL Database](https://neon.tech)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL=postgresql://<username>:<password>@<host>/<database>?sslmode=require
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/its-cutie-valerie/honcy-project.git
   cd honk-compendium
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run database migrations:
   ```bash
   npx ts-node src/db/migrate.ts
   ```

4. Start the local development server:
   ```bash
   wrangler dev
   ```

---

## Deployment 🚀

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Cloudflare Workers:
   ```bash
   wrangler deploy
   ```

---

## Folder Structure 🗂️

```plaintext
├── src
│   ├── db
│   │   ├── drizzle.ts       # Database connection setup
│   │   ├── schema.ts        # Database schema
│   │   └── migrate.ts       # Migration script
│   ├── routes
│   │   └── facts.ts         # API route handlers for goose facts
│   ├── index.ts             # Entry point for the app
├── .env                     # Environment variables
├── wrangler.toml            # Wrangler configuration
└── package.json             # Project metadata
```

---

## License 📝

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements 🙌

- **HONC Hackathon** for the inspiration.
- **Drizzle ORM** and **Hono** for the awesome tools.
- **Cloudflare Workers** for the serverless hosting platform.
# Bike Servicing Management API

An API for managing customers, bikes, and service records at a bike servicing center.
Built with Node.js, Express.js, TypeScript, Prisma ORM, and PostgreSQL.

## Tech Stack

```
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- date-fns (for date utilities)
```

## Key Features

-   Customer Management: Add, update, fetch, and delete customers.
-   Bike Management: Add, update, fetch, and delete bikes linked to customers.
-   Service Record Management: Create, update, fetch service jobs for bikes.
-   Mark Service as Completed.
-   Fetch Pending or Overdue Services older than 7 days.
-   UUID-based IDs for all tables.
-   Proper Error Handling following standardized error structure.
-   Clean Project Structure (controllers, services, routes, middlewares).

## API Endpoints

### Customer Endpoints

```
POST /api/customers — Create a new customer
GET /api/customers — Get all customers
GET /api/customers/:id — Get a customer by ID
PUT /api/customers/:id — Update a customer
DELETE /api/customers/:id — Delete a customer
```

### Bike Endpoints

```
POST /api/bikes — Add a new bike
GET /api/bikes — Get all bikes
GET /api/bikes/:id — Get a bike by ID
```

### Service Endpoints

```
POST /api/services — Create a service record
GET /api/services — Get all service records
GET /api/services/:id — Get a service record by ID
PUT /api/services/:id/complete — Mark service as completed
GET /api/services/status — Fetch overdue or pending services (older than 7 days)
```

## Live Server

Live API URL: [Bike Servicing Management](https://assignment-8-teal-theta.vercel.app)

## Setup Guide

### 1. Clone the Repository

```
git clone https://github.com/krHasan/ph-L2-M7-B4-assignment-8.git
cd bike-servicing-management-api
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

-   Create a .env file
-   Update the file with your information

```
NODE_ENV="development"
PORT=5000
APPLICATION_NAME="Bike Servicing Management"
APPLICATION_VERSION=1.0.0
DATABASE_URL=postgresql://yourUser:yourPassword@localhost:5432/yourDBName
```

### 4. Setup Prisma

```
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start Development Server

```
npm run dev
```

## Contribution

Contributions are welcome! Please fork the repository and create a pull request.

## License

MIT (do whatever you want to do :smile: )

Made by [krHasan](https://www.linkedin.com/in/kr-hasan/)

```

```

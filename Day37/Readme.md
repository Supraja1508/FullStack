# Task 37 - API Testing with Postman and .rest Files

## Goal
- Test backend APIs using Postman and `.rest` files (REST Client in VS Code).

---

## API Endpoints

**Base URL:** `http://localhost:5000`

### Register
POST `/auth/register`

```json
{
  "username": "suji",
  "email": "suji@gmail.com",
  "password": "123456"
}

Login
POST /auth/login

json

{
  "email": "suji@gmail.com",
  "password": "123456"
}

Postman Steps
Open Postman → Create or Import Collection

Use the above endpoints

Export collection as ddmp-collection.json

### Register
POST http://localhost:5000/auth/register
Content-Type: application/json

{
  "username": "suji",
  "email": "suji@gmail.com",
  "password": "123456"
}

### Login
POST http://localhost:5000/auth/login
Content-Type: application/json

{
  "email": "suji@gmail.com",
  "password": "123456"
}


Postman collection created

 .rest test file created

 API tested successfully



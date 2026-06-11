# 📘 Assignment: FastAPI REST API

## 🎯 Objective

Learn how to build a REST API using the FastAPI framework. Students will create endpoints, use request validation, and return structured responses.

## 📝 Tasks

### 🛠️ Create the FastAPI Application

#### Description
Set up a FastAPI app and define the initial route handlers to verify the API is running.

#### Requirements
Completed program should:

- Install and import `fastapi` and `uvicorn`
- Create a `FastAPI()` application instance
- Define a root endpoint that returns a welcome message
- Run the app with `uvicorn` for local testing

### 🛠️ Build CRUD Endpoints for an Item Resource

#### Description
Implement routes to create, read, update, and delete items using Pydantic models and path parameters.

#### Requirements
Completed program should:

- Define a Pydantic model for an item with fields such as `id`, `name`, `description`, and `price`
- Implement endpoints for:
  - Creating a new item (`POST`)
  - Reading an item by ID (`GET`)
  - Updating an existing item by ID (`PUT`)
  - Deleting an item by ID (`DELETE`)
- Store items in an in-memory dictionary or list for this assignment

### 🛠️ Add Validation and Error Handling

#### Description
Use FastAPI request validation and response handling to ensure the API returns correct data and clear error responses.

#### Requirements
Completed program should:

- Validate request payloads using Pydantic models
- Return a `404` error if an item is not found
- Use appropriate response models and status codes for each endpoint
- Include a sample endpoint query or path parameter to demonstrate request validation

# React and Django Project - Post Management

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Django](https://img.shields.io/badge/Django-4.2.3-green.svg)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-yellow.svg)
![Material-UI](https://img.shields.io/badge/Material--UI-5.14.1-blueviolet.svg)
This project serves as an example web application that utilizes React and Django technologies for managing user posts and implements user authentication using JWT tokens.

## Project Features

- Admin users can create, edit, and delete posts.
- Standard users can add and view posts.
- User authentication is secured using JWT tokens.
- The project includes Swagger UI with documentation for available Django API endpoints.

## Technologies Used

- **React**: The user interface is built using the React library.
- **TypeScript**: TypeScript is used for enhanced type safety and code quality.
- **Material-UI (MUI5)**: Material-UI is used for creating a modern and responsive user interface.
- **Axios**: Axios is used for making API requests.
- **Django**: The backend of the application uses the Django framework.
- **Django REST Framework**: DRF is used to build the API.
- **PostgreSQL**: PostgreSQL is used as the project's database.
- **JWT (JSON Web Tokens)**: JWT tokens are used for user authentication.
- **Swagger UI**: The project includes Swagger UI with documentation for available API endpoints.

## Permissions

- **Admin User**: Admin users have full control and can create, edit, and delete posts.
- **Standard User**: Standard users have read-only access and can view and list posts.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your computer.
2. Navigate to the project directory.

### Install and run Django:

```shell
docker compose build
docker compose up -d

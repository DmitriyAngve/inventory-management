# Inventory Management Dashboard Project

This repository contains the code for a full-stack Inventory Management Dashboard built with Next.js, Redux, Node.js, and AWS.

## Technologies Used
- **Next.js**: The core framework for server-side rendering and routing.
- **Redux Toolkit**: State management to efficiently handle data flow in the application.
- **Redux Toolkit Query**: Facilitates API calls for data fetching and caching.
- **Tailwind CSS**: Utility-first CSS for fast and consistent styling.
- **Material UI Data Grid**: Complex data handling for the user interface.
- **Recharts**: A charting library for visualizing data within the dashboard, providing responsive and customizable charts for analytics.
- **Node.js**: Backend runtime for handling requests and responses.
- **PostgreSQL**: The primary database used for storing inventory data, providing reliable and scalable relational data management.
- **Prisma**: ORM for type-safe database operations with PostgreSQL.
- 
- **AWS**:
  - **RDS**: Managed relational database for PostgreSQL.
  - **EC2**: Virtual servers to host backend services.
  - **API Gateway**: Robust APIs for the backend.
  - **Amplify**: Deploys the frontend.
  - **S3**: Stores static assets.
 
  -   [Explore the Live Demo](https://master.dl10c6nir8ctn.amplifyapp.com/)

## Key Features
- **Inventory Tracking**: View, update, and manage inventory levels.
- **User Dashboard**: Overview of products, expenses, and analytics.
- **Data Filtering and Sorting**: Using Material UI Data Grid to handle complex filtering.
- **AWS Deployment**: Scalable and robust deployment on AWS, leveraging services like EC2, RDS, and Amplify.

## Prerequisites
**Node version 18.x.x**


## Installation and Usage

To get started with this project, follow these steps:

#### 1. Clone this repository to your local machine

```bash
https://github.com/DmitriyAngve/inventory-management.git
```
#### 2. Navigate to the client directory
```bash
cd client
```
#### 3. Install dependencies for the server side
```bash
npm install
```
#### 4. Return to the server directory
```bash
cd ../server
```
#### 5. Install dependencies for the server side
```bash
npm install
```

### 6. Setup .env file
```bash
DATABASE_URL=
```

### 7. Setup Prisma
Add PostgreSQL Database
```bash
npx prisma generate
npx prisma db push
```

### 8. Start the backend server
```bash
npm run dev
```
### 9. Start the frontend app
```bash
npm run dev
```
### 10. Open your browser and navigate to
```bash
http://localhost:3000
```

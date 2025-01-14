This is course helper designed for college students, especially Indian institute of Technology Kanpur. 
Students can add, edit, update and delete the courses.

# Course Helper Web Application

## Project Overview
Course Helper is a full-stack web application designed to manage courses efficiently. The application enables users to view a list of courses, access detailed information, and securely perform CRUD (Create, Read, Update, Delete) operations on the course data.

## Tech Stack
### Languages
- HTML
- CSS
- JavaScript

### Frameworks
- React.js
- Next.js (in Node.js)

### Backend
- Express.js

### Database
- PostgreSQL

### Hosting Platform
- Vercel

## Features
### Week 1: Frontend Development
**Objective**: Build static pages with React, Next.js, and Material UI.

#### Tasks
- Create static web pages using HTML, CSS, and JavaScript.
- Implement React.js and Next.js for dynamic content.
- Use Material UI for styling.

#### Deliverables
- A landing page with a searchable list of all courses.
- Optional: A detailed course information page.
- A login page for future authentication features.

### Week 2: Backend Development
**Objective**: Develop CRUD APIs using Express.js and integrate PostgreSQL.

#### Tasks
- Set up an Express.js server.
- Design and implement RESTful APIs for managing courses.
  - **Create** a new course.
  - **Read** all courses or a specific course.
  - **Update** course details.
  - **Delete** a course.
- Connect the backend to a PostgreSQL database.

#### Deliverables
- Fully functional CRUD APIs with database integration.

### Week 3: Authentication and Integration
**Objective**: Implement secure user authentication and integrate the frontend with the backend.

#### Tasks
- Implement JWT-based authentication for login and registration.
- Secure course operations (add, update, delete) with authentication.
- Integrate frontend pages with backend APIs using Axios.

#### Deliverables
- A secure, fully integrated app allowing users to manage courses.

### Week 4: Deployment
**Objective**: Deploy the application on Vercel and perform end-to-end testing.

#### Tasks
- Deploy the frontend and backend on Vercel.
- Set up environment variables.
- Conduct comprehensive testing to ensure the app works as expected.

#### Deliverables
- A live, deployed web application.

## Tools and Methods
- **Frontend**: HTML, CSS, JavaScript, React.js, Next.js, Material UI
- **Backend**: Node.js, Express.js, PostgreSQL
- **Authentication**: JWT (JSON Web Tokens), Bcrypt for password hashing
- **API Testing**: Postman, ThunderClient (VS Code extension)
- **Database**: PostgreSQL with Node.js integration
- **Environment Variables**: Dotenv for local development, Vercel for production
- **Deployment**: Vercel for hosting both frontend and backend
- **Version Control**: Git and GitHub for code management

## Folder Structure
- **/frontend**: Contains all Next.js and React components for the client-side application.
- **/backend**: Includes Express.js server files and API routes.
- **/database**: PostgreSQL scripts and connection setup.

## How to Run the Project Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd course-helper
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```
4. Set up a PostgreSQL database and configure the connection in the `.env` file.
5. Run the backend server:
   ```bash
   npm run dev
   ```
6. Run the frontend:
   ```bash
   npm run dev
   ```
7. Access the application at `http://localhost:3000`.

## Future Improvements
- Add advanced search and filtering features.
- Implement role-based access control.
- Improve UI/UX with additional styling and animations.
- Add unit and integration tests.

## Contributors
- **Project Owner**: Kartik Raj Github: Kartikhehe
- **Contributors**: Open for contributions!




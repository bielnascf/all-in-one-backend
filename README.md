# All-in-One Backend: API for Personal Organization Application

This repository contains the backend API for the **All-in-One** personal organization application. Built with modern tools and best practices, the API provides endpoints for managing tasks, goals, habits, expenses, and other organization features.

## Features

- **User Authentication**: Secure user registration and login using JWT.
- **Task Management**: Create, update, delete, and retrieve tasks.
- **Goal Tracking**: Define and monitor personal or professional goals.
- **Habit Tracking**: Keep a record of habits and progress.
- **Expense Management**: Track daily, weekly, and monthly expenses.

## Technologies Used

### Core Stack:
- **Node.js**: Runtime environment for building scalable server-side applications.
- **Express.js**: Fast and lightweight web framework.
- **Prisma ORM**: Database modeling and management.
- **PostgreSQL**: Relational database for secure and efficient data storage.

### Additional Tools:
- **JWT (JSON Web Tokens)**: For authentication and authorization.
- **dotenv**: For managing environment variables.
- **ESLint & Prettier**: For maintaining clean and consistent code.

## Installation

Follow these steps to set up the backend locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/username/all-in-one-backend.git
   cd all-in-one-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and configure the following:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the server:
   ```bash
   npm start
   ```

The API will be available at `http://localhost:5000`.

## API Endpoints (COMING SOON)

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or collaboration, reach out to:

### Gabriel
- **GitHub**: [github.com/bielnascf](https://github.com/bielnascf)
- **LinkedIn**: [linkedin.com/in/gabriel-nascimento](https://www.linkedin.com/in/gabriel-nascimento-484450255/)

### Thiago
- **GitHub**: [github.com/ThiagoBR109](https://github.com/ThiagoBR109)
- **LinkedIn**: [linkedin.com/in/thiago-macieira](https://www.linkedin.com/in/thiago-macieira-061348273/)

---
Elevate your personal organization with All-in-One!


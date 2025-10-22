# evenza_frontend

Features
🖥️ Frontend

Event list page — displays all events (GET /events)

Add event form — create new events (POST /events)

Book event form — book an existing event (POST /bookings)

Bookings page — view all bookings (GET /bookings)

⚙️ Backend

Built with Express + TypeScript

PostgreSQL database with the following models:

Event: id, title, description, date, location

Booking: id, userName, eventId

REST API endpoints:

POST /events → Create an event

GET /events → List all events

POST /bookings → Book an event

GET /bookings → List all bookings

💡Note

Validation (e.g., event date cannot be in the past)

Prevent duplicate bookings by the same user

Basic UI styling with Material UI or Tailwind CSS

🧱 Requirements

Make sure you have the following installed:

Node.js ≥ 18

PostgreSQL

npm or yarn

⚙️ Backend Setup
1. Clone the repository
git clone https://github.com/Amarachi-Codes/evenza_frontend.git
cd <evenza>/backend

2. Install dependencies
npm install

3. Create a .env file

Inside the backend folder, create a file named .env and add your database connection:

DATABASE_URL="postgresql://${DATABASE_USER_DEV}:${DATABASE_PASS_DEV}@${DATABASE_HOST_DEV}:${DATABASE_PORT_DEV}/${DATABASE_NAME_DEV}?schema=public"

PORT = 3010

4. Run database migrations (if using Prisma or TypeORM)
npx prisma migrate dev


or

npm run migrate

5. Start the backend server
npm run dev


The API should now be running on http://localhost:3010

🖥️ Frontend Setup
1. Move into the frontend folder
cd ..evenza

2. Install dependencies
npm install

3. Configure API URL

In your .env file (inside frontend), set:

VITE_API_URL=http://localhost:3010

4. Start the frontend app
npm run dev


Frontend should now run on http://localhost:5173
 (or a similar port)

🔗 API Quick Test

You can test endpoints using Postman or cURL:

# Create an event
curl -X POST http://localhost:3010/events -H "Content-Type: application/json" \
-d '{"title":"Tech Conference","description":"AI Meetup","date":"2025-12-01","location":"Lagos"}'

🧪 Project Structure

Clean folder structure

Proper TypeScript usage (types/interfaces)

Working CRUD endpoints

Functional frontend consuming the backend API

Basic error handling

📜 License

This project is open-source and free to use under the MIT License
.

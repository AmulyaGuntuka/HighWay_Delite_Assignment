# HighWay_Delite_Assignment
# 🌍 BookIt: Experiences & Slots

A fullstack web application where users can explore curated travel experiences, view available slots, apply promo codes, and complete bookings — built as part of the Fullstack Intern Assignment.

------------------------------------------------------------
🎯 OBJECTIVE
------------------------------------------------------------
To build a complete end-to-end booking platform using React + Node.js + MongoDB, covering both frontend and backend development, API integration, and clean UI design.

------------------------------------------------------------
🧩 FEATURES IMPLEMENTED
------------------------------------------------------------

FRONTEND (React + TypeScript + Tailwind CSS)
--------------------------------------------
- Framework: React (Vite + TypeScript)
- Styling: Tailwind CSS for responsive and modern UI
- Pages Built:
  🏠 Home Page – Lists all available experiences from backend
  📖 Details Page – Displays full experience details and available slots
  💳 Checkout Page – Collects user info, validates promo codes, and calculates dynamic total
  ✅ Result Page – Shows booking confirmation with reference ID

Frontend Logic:
- Fully responsive across mobile and desktop
- Managed using React Hooks (useState, useEffect)
- Data fetched dynamically from backend using Axios
- Form validation for user inputs
- Promo code logic with live discount calculation
- Secure signup/login with password confirmation check
- Prevents mismatched user email during checkout

--------------------------------------------
BACKEND (Node.js + Express + MongoDB)
--------------------------------------------
- Framework: Express.js
- Database: MongoDB (using Mongoose)
- Configurations handled through .env file

API Endpoints:
  GET /api/experiences       → Fetch all experiences
  GET /api/experiences/:id   → Fetch experience details
  POST /api/bookings         → Create new booking
  POST /api/promo/validate   → Validate promo code
  POST /api/auth/signup      → Register new user with password validation
  POST /api/auth/login       → Authenticate existing user

Data Handling:
- MongoDB collections: users, experiences, bookings, promos
- Database auto-created (name: highway_delite_main)
- Prevents invalid promo or duplicate user creation
- Uses JWT for user authentication

------------------------------------------------------------
🧠 INTEGRATION FLOW
------------------------------------------------------------
Home → Details → Checkout → Result

1. User explores experiences on Home page
2. Clicks an experience to view its details
3. Selects a slot and proceeds to checkout
4. Applies promo , fills in details, and confirms booking
5. Confirmation page shows booking success message with unique Ref ID

------------------------------------------------------------
💬 PROMO CODES AVAILABLE
------------------------------------------------------------
WELCOME10 - 10%
FLAT50 - ₹50
FESTIVE20 - 20%
HDADVENTURE15 - 15%
TRAVEL200 - ₹200
WEEKEND5 - 5%
REFER100 - ₹100
STUDENT25 - 25%
EARLYBIRD50 - ₹50
SUPERDEAL30 - 30%

------------------------------------------------------------
🧰 TECH STACK
------------------------------------------------------------
Frontend:
- React + TypeScript (Vite)
- Tailwind CSS
- Axios
- React Router DOM

Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv, bcrypt, JWT Authentication

------------------------------------------------------------
⚙️ SETUP & RUN INSTRUCTIONS
------------------------------------------------------------

1️⃣ Clone Repository
--------------------
git clone https://github.com/AmulyaGuntuka/HighWay_Delite_Assignment.git
cd HighWay_Delite_Assignment

2️⃣ Backend Setup
-----------------
cd backend
npm install

Create a .env file inside backend folder with following:
-------------------------------------------------------
PORT=5000
MONGO_URI=mongodb+srv://Admin:Admin1232025@cluster0.9si7fcx.mongodb.net/?appName=Cluster0
JWT_SECRET=mysecretkey123
FRONTEND_URL=http://localhost:5173
On Render: FRONTEND_URL=https://highway-delite-assignment.vercel.app

Seed sample data into database:
-------------------------------
node seed/seed.js

Run backend server:
-------------------
npm start

3️⃣ Frontend Setup
------------------
cd ../frontend
npm install
npm run dev

Frontend runs on: http://localhost:5173
Backend runs on:  http://localhost:5000

------------------------------------------------------------
☁️ HOSTING INSTRUCTIONS
------------------------------------------------------------
- Host Frontend: Vercel
- Host Backend: Render 
- Database: MongoDB Atlas

After deployment, update your .env in both frontend and backend with deployed URLs.

------------------------------------------------------------

🔗 SUBMISSION LINKS
------------------------------------------------------------
Live Application: https://high-way-delite-assignment.vercel.app
Backend API: https://highway-delite-backend-048l.onrender.com
GitHub Repository: https://github.com/AmulyaGuntuka/HighWay_Delite_Assignment
Figma Design: https://www.figma.com/design/8X6E1Ev8YdtZ3erV0Iifvb/HD-booking?node-id=0-1&p=f&t=K4scwnxfIHmfbb2a-0


------------------------------------------------------------
🏁 FINAL DELIVERABLES
------------------------------------------------------------
✅ Fully working frontend + backend
✅ Hosted live for review
✅ Database seeded with sample experiences and promo codes
✅ Secure user authentication
✅ Full booking flow integrated (Home → Details → Checkout → Result)
✅ Figma design replicated using TailwindCSS
✅ README with clear setup instructions

------------------------------------------------------------
👩‍💻 DEVELOPED BY
------------------------------------------------------------
Amulya Guntuka  
B.Tech CSE | Fullstack Developer  
amulyaguntuka@gmail.com

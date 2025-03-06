
kiddoonect – Child Records Management App
kiddoonect is a secure and intuitive records management app designed for parents to organize their child's medical, school, and extracurricular records in one place. Built using React and Tailwind CSS, the app provides a seamless user experience with role-based access, authentication, and AI-powered insights.

✨ Features

🔐 Authentication & User Management
Login & Signup – Email/Password & Google OAuth
Role-Based Access – Separate profiles for parents and hospitals
Forgot Password – Secure password reset functionality

🏠 Dashboard
Overview of child profiles (cards for each child)
Quick Stats – Upcoming vaccinations, school deadlines, and activities
Navigation Menu – Access medical, school, and extracurricular records

👶 Child Profile
Basic info: Name, age, school, blood type, emergency contacts
Health Records – Vaccinations, allergies, doctor visits
School Records – Report cards, attendance, and certificates
Extracurricular Activities – Schedules and achievements

🏥 Medical Records
Upload & Store PDFs/JPEGs categorized as:
Vaccination Reports
Doctor Visits
Lab Test Results
Prescriptions
Emergency Access – Quick access to vital health details
Download & Filter reports

🏫 School Records
Upload & Store PDFs/JPEGs for:
Report Cards
Attendance Records
Exam Reports
Certificates & Achievements
Search & Filter by year, type, or subject

🏆 Extracurricular Activities
Calendar View – Upcoming events and activity schedules
Upload PDFs/JPEGs categorized as:
Certificates
Participation Records
Performance Reports

🔒 Role-Based Access Management
Grant/Revoke Access to:
Doctors – Medical reports only
Teachers – School records only
Coaches – Extracurricular records only
Toggle-Based UI for easy access control

🚨 Emergency Mode
One-Tap Access to vital info:
Blood Type, Allergies, Emergency Contacts
Recent Medical Reports (PDF/JPEG)

🤖 AI Insights
Health Trends Analysis – Growth charts, BMI, vaccination tracking
Academic Performance Insights – AI-based recommendations
Extracurricular Trends – Participation frequency & impact analysis

⚙️ Settings
Profile Settings – Update parent & child info
Notifications – Set reminders for health, school, and activities
Security Settings – Change password, enable 2FA, manage devices

🛠 Tech Stack
Feature	Technology
Frontend	React, Tailwind CSS
State Management	React Context API / Redux
Routing	React Router
File Storage	Firebase Storage (PDF/JPEG Uploads)
Notifications	Toast Alerts (ShadCN/Headless UI)
UI Components	ShadCN / Headless UI


🚀 Getting Started
1️⃣ Prerequisites
Make sure you have the following installed:

Node.js (v16+ recommended)
Git
Firebase account (for file storage & authentication)
2️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/child-connect.git
cd child-connect
3️⃣ Install Dependencies
sh
Copy
Edit
npm install
4️⃣ Configure Firebase
Create a Firebase project
Enable Authentication (Email & Google OAuth)
Enable Firebase Storage
Add your Firebase config to .env
sh
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
5️⃣ Start the Development Server
sh
Copy
Edit
npm run dev
Then, open http://localhost:3000/ in your browser.

📜 License
This project is licensed under the MIT License – feel free to modify and use it as needed.

🙌 Contributing
Want to improve Child Connect? Follow these steps:

Fork the repository
Create a new branch (feature-new)
Commit changes (git commit -m "Added new feature")
Push your branch (git push origin feature-new)
Create a Pull Request



# chat-app-sentiment
Realtime Chat Application

This project is a realtime chat application built with Next.js, React, Pusher, and Express.

Features

Realtime Messaging: Messages are delivered instantly using Pusher for websocket communication.
Sentiment Analysis: Analyzes message sentiment using the Sentiment library.
Responsive Design: Designed to be responsive and work well on various screen sizes.
Technologies Used

Next.js
React
Pusher
Express
Sentiment
Setup Instructions

Clone the repository:

bash
Copy code
git clone <repository-url>
cd realtime-chat-app
Install dependencies:

bash
Copy code
npm install
Environment Variables:

Create a .env file in the root directory.
Define the following variables in the .env file:
plaintext
Copy code
PUSHER_APP_ID=your_pusher_app_id
PUSHER_APP_KEY=your_pusher_app_key
PUSHER_APP_SECRET=your_pusher_app_secret
PUSHER_APP_CLUSTER=your_pusher_cluster
PORT=3000
Start the development server:

bash
Copy code
npm run dev
Access the application:
Open your browser and go to http://localhost:3000.

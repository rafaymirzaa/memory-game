# Memory Game - Multiplayer Edition

A real-time multiplayer memory card game built with React, Node.js, Socket.io, and MongoDB.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8.3-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

## Features

### Core Gameplay
- **Memory Challenge**: Click on cards without repeating to achieve the highest score
- **Dynamic Card Shuffling**: Cards randomize after each click to test your memory
- **Rick and Morty Theme**: Character cards fetched from the Rick and Morty API
- **Score Persistence**: High scores saved to MongoDB database

### Multiplayer Features
- **Real-time Chat**: Communicate with other players during gameplay
- **Live Player List**: View all active players and their current scores
- **Real-time Score Updates**: See other players' scores update instantly
- **Join/Leave Notifications**: System messages when players connect or disconnect

## Tech Stack

### Frontend
- **React** - UI framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Socket.io Client** - Real-time communication
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web framework
- **Socket.io** - WebSocket server
- **MongoDB** (Mongoose) - Database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn package manager

### Clone Repository
```bash
git clone <repository-url>
cd memory-game
```

### Backend
```bash
cd server

npm install

touch .env

# ask me for the environment vars

npm start
```

### Frontend 
```bash

cd ..


npm install

npm run dev
```

### MongoDB Setup
```bash
# MongoDB locally
mongod

# Or use MongoDB Atlas and update MONGO_URI in .env
```

## Usage

1. **Enter Name**: Provide a player name on the welcome screen
2. **Play Game**: Click cards without repeating to increase your score
3. **Chat**: Click the 💬 button to open the chat interface
4. **View Players**: Click the 👥 button to see active players and scores

## API Endpoints

### REST API

#### Get All Scores
```
GET /scores
```
Returns top 10 high scores sorted by score (descending)

#### Get Player Score
```
GET /scores/:playerName
```
Returns specific player's score data

#### Create/Update Score
```
POST /scores
Body: { playerName, score, highScore }
```
Creates new player or updates existing high score

#### Delete Player Score
```
DELETE /scores/:playerName
```
Removes player's score from database

### Socket.io Events

#### Client → Server
- `player:join` - Player enters game with name
- `chat:send` - Player sends chat message
- `score:update` - Player's score changes

#### Server → Client
- `chat:message` - Broadcast chat message to all players
- `players:update` - Send updated player list with scores

## Game Rules

1. Click on any card to start
2. Cards shuffle after each click
3. Don't click the same card twice
4. Each unique card clicked increases your score by 1
5. Clicking a repeated card ends the game
6. Your high score is saved automatically
7. Compete with other players in real-time


## Features in Detail

### Real-time Chat
- Send and receive messages instantly
- System notifications for player events
- Message timestamps
- Distinguished styling for own messages

### Live Player Tracking
- View all connected players
- See real-time score updates
- Identify current player with "(You)" label
- Automatic updates on join/leave

### Score Management
- Persistent storage in MongoDB
- Automatic high score tracking
- Individual player profiles
- Leaderboard-ready data structure

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Known Issues

- Players must have unique names (no validation currently)
- Chat history clears on page refresh
- No authentication system / Oauth2.0 doesn't allow me to host on some PORTS

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue in the repository.

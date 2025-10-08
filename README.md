# Gcrew - Firebase Discussion Platform

A modern web application for student discussions and collaboration, now powered by Firebase Firestore.

## 🔥 Firebase Migration Complete

This project has been successfully migrated from MySQL/SQLite to Firebase Firestore for better scalability and real-time features.

## 📋 Features

- **User Authentication** - Register and login with secure password hashing
- **Discussion Forums** - Class-level and department-level discussions
- **Real-time Chat** - Private messaging system
- **Profile Management** - User profiles with avatar uploads
- **File Sharing** - Upload and share files in discussions
- **Responsive Design** - Works on desktop and mobile devices

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Firebase Project with Firestore enabled

### 1. Clone the Repository
```bash
git clone https://github.com/MONICK10/Gcrew.git
cd Gcrew/server
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Enable **Firestore Database**
4. Go to Project Settings > General > Your Apps
5. Add a web app and copy the configuration

#### Update Server Configuration
Replace the placeholder config in `server/db.js`:
```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com", 
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

#### Update Client Configuration  
Replace the placeholder config in `client/db.js` with the same values.

### 4. Firestore Security Rules
Set up security rules in Firebase Console > Firestore Database > Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // For development - customize for production
    }
  }
}
```

### 5. Create Upload Directories
```bash
mkdir -p server/uploads
mkdir -p server/public/uploads
```

## 🏃‍♂️ Running the Application

### Start the Server
```bash
cd server
npm start
# or for development with auto-reload:
npm run dev
```

### Serve the Client
You can use any static file server for the client:
```bash
# Using Python
cd client
python -m http.server 5500

# Using Node.js http-server (install globally: npm i -g http-server)
cd client
http-server -p 5500

# Using Live Server extension in VS Code
```

## 📁 Project Structure

```
Gcrew/
├── client/                 # Frontend files
│   ├── *.html             # HTML pages
│   ├── db.js              # Firebase client config
│   ├── css/               # Stylesheets
│   └── js/                # JavaScript modules
├── server/                # Backend Express server
│   ├── db.js              # Firebase server config
│   ├── server.js          # Main server file
│   ├── package.json       # Dependencies
│   ├── routes/            # API routes
│   │   ├── auth.js        # Authentication
│   │   ├── chats.js       # Chat messages
│   │   ├── discussions.js # Discussion posts
│   │   └── profile.js     # User profiles
│   └── uploads/           # File uploads
├── .gitignore
└── README.md
```

## 🗃️ Firestore Collections

The application uses these Firestore collections:

- **`users`** - User accounts (name, email, password, department, batch)
- **`chats`** - Chat messages between users
- **`discussions`** - Discussion posts (class/department/public)
- **`post_likes`** - Likes on discussion posts
- **`post_replies`** - Replies to discussion posts
- **`friends`** - Friend relationships and requests

## 🔗 API Endpoints

### Authentication (`/auth`)
- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### Chats (`/chats`)
- `GET /chats/:userId` - Get user's chat messages
- `POST /chats` - Send new chat message

### Discussions (`/discussions`)
- `GET /discussions` - Get class discussions (batch + department)
- `POST /discussions` - Create new discussion
- `GET /discussions/department/:dept` - Get department discussions
- `POST /discussions/department` - Create department discussion
- `GET /discussions/public/all` - Get public discussions
- `POST /discussions/:id/like` - Like a discussion
- `GET /discussions/:id/likes` - Get like count
- `POST /discussions/:id/reply` - Reply to discussion
- `GET /discussions/:id/replies` - Get discussion replies

### Profile (`/profile`)
- `GET /profile/:id` - Get user profile
- `PUT /profile` - Update profile
- `POST /profile/upload` - Upload avatar

## 🛠️ Development

### Client-Side JavaScript
The client uses ES6 modules and Firebase web SDK. Key files:
- `auth.js` - Authentication logic
- `chat.js` - Chat functionality
- `main.js` - Core application logic
- `profile.js` - Profile management

### Server Configuration
- **Port:** 5006 (configurable in `server.js`)
- **CORS:** Enabled for `localhost:5500` and `127.0.0.1:5500`
- **File Uploads:** Handled by Multer
- **Static Files:** Served from `public/` and `uploads/`

## 🔐 Security Features

- **Password Hashing:** bcrypt with 10 rounds
- **CORS Protection:** Configured for specific origins
- **Input Validation:** Server-side validation for all endpoints
- **File Upload Security:** File type and size restrictions

## 🚨 Troubleshooting

### Common Issues

1. **Firebase Configuration Error**
   - Ensure you've replaced all placeholder values in both `server/db.js` and `client/db.js`
   - Check that your Firebase project has Firestore enabled

2. **CORS Errors**
   - Make sure your client is served from `localhost:5500` or `127.0.0.1:5500`
   - Update CORS configuration in `server.js` if using different ports

3. **File Upload Issues**
   - Ensure upload directories exist: `server/uploads/` and `server/public/uploads/`
   - Check file permissions

4. **Module Import Errors**
   - Client uses Firebase CDN imports - ensure internet connection
   - Server uses npm packages - run `npm install` if needed

### Development Tips

- Use browser dev tools to monitor Firebase operations
- Check Firestore console for data structure
- Monitor server logs for API errors
- Use Firebase emulators for local development

## 📝 Migration Notes

This project was migrated from MySQL/SQLite to Firebase:
- All SQL queries converted to Firestore operations
- User authentication updated to use Firestore collections
- File uploads remain local but metadata stored in Firestore
- Real-time features can now be easily implemented

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.
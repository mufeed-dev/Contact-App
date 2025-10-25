# Contact Manager App

A full-stack React contact management application with CRUD operations, search functionality, and REST API.

## Features

- ✅ Add, edit, view, and delete contacts
- ✅ Real-time search and filtering
- ✅ React Router for navigation
- ✅ JSON Server backend API
- ✅ Responsive UI with Semantic UI

## Tech Stack

- **Frontend:** React, React Router, Semantic UI
- **Backend:** JSON Server
- **State Management:** React Hooks (useState, useEffect)

## Project Structure

```
contact-app/
├── contact-app/          # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   └── App.js        # Main app component
│   └── package.json
└── server-api/           # JSON Server backend
    ├── db.json           # Database file
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mufeed-dev/Contact-App.git
   cd Contact-App
   ```

2. **Install frontend dependencies**

   ```bash
   cd contact-app
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server-api
   npm install
   ```

### Running the Application

1. **Start the backend server**

   ```bash
   cd server-api
   npm start
   ```

   Server runs on http://localhost:3001

2. **Start the frontend**
   ```bash
   cd contact-app
   npm start
   ```
   App runs on http://localhost:3000

## Usage

- **View Contacts:** See all contacts on the home page
- **Add Contact:** Click "Add Contact" to create new contacts
- **Search:** Use the search bar to filter contacts
- **Edit/Delete:** Use the edit/delete icons on each contact card
- **View Details:** Click on a contact to see detailed view

## API Endpoints

- `GET /contacts` - Get all contacts
- `POST /contacts` - Create new contact
- `PUT /contacts/:id` - Update contact
- `DELETE /contacts/:id` - Delete contact

## License

MIT License

```

```

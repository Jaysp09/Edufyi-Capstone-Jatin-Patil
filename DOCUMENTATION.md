# 📘 Project Documentation — Edufy Capstone

---

## 📌 Overview

This capstone project consists of two main applications:

1. Portfolio Website (Landing Application)
2. Contact Manager Application (Secondary Module)

Both applications are integrated within a single React project and accessible via navigation.

---

## 🌐 Live Application

https://edufyi-capstone-jatin-patil-hy5g.vercel.app/

---

# 🧩 PROJECT 1 — PORTFOLIO WEBSITE

---

## 🎯 Objective

To develop a personal portfolio website that includes:

- Profile presentation
- Contact form for user interaction
- Admin panel to manage submissions
- Persistent storage
- Dark mode functionality

---

## 🏗 Architecture

- Built using React (component-based architecture)
- Modular and reusable components
- State managed using React hooks

---

## 📁 Key Components

### Hero Section
Displays introduction and branding

### About Section
Shows personal and professional details

### Contact Section
- Accepts Name, Email, Message
- Performs validation
- Stores data in localStorage

---

## 💾 Data Storage

All contact form submissions are stored in localStorage as a JSON array.

### Data Structure:

{
  "id": "unique_id",
  "name": "User Name",
  "email": "user@example.com",
  "message": "User message",
  "timestamp": "ISO string"
}

---

## 🔐 Admin Panel

### Access:
Username: jay  
Password: jay09  

### Features:
- Login authentication
- View all submitted messages
- Delete messages
- Displays timestamp for each entry

---

## 🌙 Dark Mode

- Implemented using ThemeProvider
- User preference stored in localStorage
- Automatically persists

---

## 📧 Validation

- Email validation using regex
- Required field validation
- User-friendly error handling

---

# 🧩 PROJECT 2 — CONTACT MANAGER

---

## 🎯 Objective

To build a dynamic contact management system using React.

---

## 📍 Navigation

Accessible via:
- Footer link
- Navigation within Portfolio

---

## 🏗 Architecture

- Component-based design
- Clean separation of UI and logic
- Efficient state handling

---

## 📁 Components

### ContactForm
- Handles creation and update of contacts

### ContactList
- Displays list of contacts
- Handles filtering

### ContactCard
- Shows individual contact
- Edit/Delete functionality

---

## ⚙️ Features

### Add Contact
- Adds new contact dynamically

### Edit Contact
- Updates existing contact details

### Delete Contact
- Removes contact

### Search
- Filters contacts by name/company
- Case-insensitive

---

## 💾 Persistence

- Stored in localStorage
- Automatically loaded on page load
- Updates in real-time

---

## 🎨 UI/UX

- Responsive design
- Grid-based layout
- Smooth animations (Framer Motion)
- Interactive hover effects

---

## 🔄 Data Flow

User Input → React State → localStorage → UI Update

---

# 🚀 Conclusion

This project demonstrates:

- Modern frontend development using React
- Component-based architecture
- State management
- Persistent storage
- UI/UX best practices

---

## 👨‍💻 Author

Jatin Patil
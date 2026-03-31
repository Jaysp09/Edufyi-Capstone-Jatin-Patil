# 📘 Project Documentation — Edufy Capstone

---

## 📌 Overview

This capstone project consists of two main applications:

1. Portfolio Website  
2. Contact Manager Application  

Both applications are built using React and follow modern frontend development practices.

---

# 🧩 PROJECT 1 — PORTFOLIO WEBSITE

---

## 🎯 Objective

To develop a personal portfolio website that includes:
- User interface for profile display  
- Contact form for user interaction  
- Admin panel to manage submissions  
- Persistent data storage  
- Dark mode functionality  

---

## 🏗 Architecture

- Component-based architecture using React  
- Modular structure for maintainability  
- State management using React hooks  

---

## 📁 Key Components

### 1. Hero Section
Displays introduction and branding  

### 2. About Section
Shows personal and professional information  

### 3. Contact Section
- Collects user input (Name, Email, Message)  
- Handles form submission  
- Validates user input  

---

## 💾 Data Storage

- Contact form data is stored in browser localStorage  
- Data is stored as a JSON array  

### Example Data Structure:

{
  "id": "unique_id",
  "name": "User Name",
  "email": "user@example.com",
  "message": "Message content",
  "timestamp": "ISO Date String"
}

---

## 🔐 Admin Panel

### Features:
- Login authentication  
- Displays all submitted messages  
- Delete messages functionality  
- Message count display  

---

## 🌙 Dark Mode

- Implemented using ThemeProvider  
- Stored in localStorage  
- Automatically persists user preference  

---

## 📧 Validation

- Email validation using regex  
- Required fields validation  
- User feedback via UI messages  

---

# 🧩 PROJECT 2 — CONTACT MANAGER

---

## 🎯 Objective

To build a dynamic contact management system using React.

---

## 🏗 Architecture

- Component-based design  
- Separation of concerns  
- Efficient state management  

---

## 📁 Components

### ContactForm
- Handles input fields  
- Adds or updates contacts  

### ContactList
- Displays all contacts  
- Handles filtering  

### ContactCard
- Displays individual contact details  
- Supports edit and delete actions  

---

## ⚙️ Functionality

### Add Contact
- Uses useState for state management  
- Dynamically updates UI  

### Edit Contact
- Updates existing contact details  

### Delete Contact
- Removes contact from list  

### Search & Filter
- Implemented using useMemo  
- Case-insensitive search  

---

## 💾 Persistence

- Contacts stored in localStorage  
- Automatically loaded on app startup  
- Synced whenever data changes  

---

## 🎨 UI/UX Design

- Responsive layout  
- Card-based UI  
- Hover interactions  
- Smooth animations using Framer Motion  

---

## 🔄 Data Flow

User Input → React State → localStorage → UI Update  

---

# 🚀 Conclusion

This project demonstrates:

- Frontend development using React  
- Component-based architecture  
- State management using hooks  
- Persistent data storage  
- Modern UI/UX design principles  

---

## 👨‍💻 Author

Jatin Patil
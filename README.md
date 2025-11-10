# 🔍 GitHub Profile Finder

A simple and responsive web app that allows users to search for any GitHub profile by username and instantly view public details such as the profile picture, name, followers, following, and email — using the **GitHub REST API**.

---

## 🚀 Live Demo
👉 [https://prathmesh-marathe.github.io/Github-Profile-Finder](https://prathmesh-marathe.github.io/Github-Profile-Finder)

*(After publishing via GitHub Pages)*

---

## 🧠 Features

✅ Search any GitHub user by username  
✅ Displays profile photo, name, followers, following, and email  
✅ Handles invalid usernames gracefully  
✅ Simple and clean UI inspired by GitHub's dark theme  
✅ Fully responsive on all devices  

---

## 💻 Technologies Used

- **HTML5** – structure  
- **CSS3** – styling and responsive layout  
- **JavaScript (ES6)** – API handling (via `XMLHttpRequest`)  
- **GitHub API** – to fetch real-time user data  

---

## ⚙️ How to Use

1. Open the app in your browser  
2. Type a valid GitHub username (e.g., `octocat`) in the search box  
3. Click **Search**  
4. The app fetches user data from the GitHub API and displays it in a styled card

---

## 🧩 Code Overview

### **HTML**
Contains the basic structure for the search input, button, and profile card.

### **CSS**
Provides the dark-themed design with responsive styling for mobile and desktop devices.

### **JavaScript**
Handles the logic:
- Takes the username input  
- Calls `https://api.github.com/users/<username>`  
- Parses and displays the data dynamically  
- Handles invalid input and 404 errors gracefully  

---

## 📸 Screenshot
*(You can add your own screenshot here)*

```markdown
![App Screenshot](screenshot.png)

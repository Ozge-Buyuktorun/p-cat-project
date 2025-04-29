
# Photo Upload Website - Node.js, TypeScript, Express.js

## 📦 Project Overview

This project is a simple photo upload website built with **Node.js**, **TypeScript**, and **Express.js**. It allows users to upload image files, which are then served statically using Express’s built-in `express.static` middleware. The design follows a clean and modular structure to ensure maintainability and scalability.

---

## 🚀 Features

- 📤 Upload photos via HTTP POST requests
- 🗂️ Serve uploaded images statically
- 📁 Store images in a local directory
- ✅ MIME type validation (only images allowed)
- 🧱 Modular codebase using TypeScript interfaces and services

---

## 📁 Project Structure
            p-cat-project/
        ├── 📁 node_modules/
        ├── 📁 public/
        ├── 📁 temp/
        ├── 📄 app.js
        ├── 📄 gitCommand.md
        ├── 📄 package-lock.json
        ├── 📄 package.json
        └── 📄 README.md

Notes:
- for gitignore: https://www.toptal.com/developers/gitignore/


---

## ⚙️ Technologies Used

- **Node.js** – Runtime environment
- **TypeScript** – Static typing and cleaner development experience
- **Express.js** – Web framework
- **Multer** – Middleware for handling `multipart/form-data` (used for file uploads)

---

## 🧩 Key Implementation Details

### 1. Static File Middleware

We use the built-in Express `express.static` middleware to serve uploaded images from the `/public/uploads` folder:

```ts
    app.use('/images', express.static(path.join(__dirname, '../public/uploads')));
```

### 📦 Setup Instructions
```
    Clone the repo
    git clone https://github.com/your-repo/photo-upload-app.git
    Install dependencies
    npm install
    Compile TypeScript
    npx tsc
    Run the server
    node dist/server.js
```
📌 Notes

Ensure the public/uploads directory exists before uploading
Add validation for file size limits in production
Consider using a cloud storage service (e.g., AWS S3) for scalability.

### 📸 Sample Request
```
    POST /upload
    Content-Type: multipart/form-data
    Field name: photo
    Body: image file
```
```
//Response:
    {
    "message": "File uploaded successfully.",
    "filePath": "/images/1693441345412-myphoto.jpg"
    }
```
### Package Information:
    1. I use template engine in npm ejs. 
        - source code : https://www.npmjs.com/package/ejs
        ```npm install ejs```
    2. This repo is created with using CommonJS. If you want to, you use ES6 module and import statement.
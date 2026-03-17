# 🚀 QR Code Maker

A simple and responsive QR Code Generator built with **Node.js**, **Express**, and **EJS** that allows users to generate and download QR codes instantly from any URL.

---

## 📸 Preview

Generate QR codes from URLs and download them instantly through a clean and responsive interface.

---

## ✨ Features

- ✅ Generate QR codes from any valid URL
- ✅ Responsive modern UI
- ✅ Instant QR preview
- ✅ One-click download functionality
- ✅ Server-side rendering with EJS
- ✅ Clean Express backend structure

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, HTML, CSS
- **Library:** qrcode (npm package)
- **Language:** JavaScript (ES Modules)

---

## 📂 Project Structure
QR-Code-Maker/
│
├── public/
│ └── css/
│ └── style.css
│
├── views/
│ └── index.ejs
│
├── app.js
├── package.json
└── README.md


---

## ⚙️ Installation


### 1️⃣ Clone the repository

```bash
git clone https://github.com/niffy024/qr-code-maker.git

2️⃣ Navigate into the project folder
cd qr-code-maker

3️⃣ Install dependencies
npm install

4️⃣ Start the server
npm start
or npm run dev

The application will run at:
http://localhost:3000

🧠 How It Works
User enters a URL into the form.
Express receives the POST request.
The qrcode library generates a QR image.
The image is converted into a Base64 Data URL.
EJS dynamically renders the generated QR code.
User can download the QR code instantly.

📥 Download Feature
The QR code is downloadable directly using the browser’s native download capability without saving files permanently on the server.

🚧 Future Improvements
Add QR customization (color & size)
Copy QR image button
Dark mode UI
QR code history
API endpoint for QR generation
Drag & drop URL input

👨‍💻 Author
Abdulahi Ogunlesi
GitHub: https://github.com/niffy024
LinkedIn: Abdulahi Ogunlesi

📄 License
This project is open-source and available under the MIT License.

⭐ Support
If you like this project, consider giving it a ⭐ on GitHub!

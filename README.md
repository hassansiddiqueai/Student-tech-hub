# Student Tech Hub

A beginner-friendly full-stack web application designed to show upcoming technical events and allow students to register.

## Project Structure

This project consists of two main parts:
- **Frontend**: A plain HTML, CSS, and JavaScript interface.
- **Backend**: A Python FastAPI server providing data to the frontend.

## Prerequisites

- Python 3.8 or higher installed on your computer.
- A modern web browser (Chrome, Firefox, Edge, etc.).

## 1. How to Install the Backend

1. Open your terminal or command prompt.
2. Navigate to the `backend` folder of this project:
   ```bash
   cd backend
   ```
3. (Optional but recommended) Create a virtual environment:
   ```bash
   python -m venv venv
   ```
4. (Optional) Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`
5. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## 2. How to Run the Backend

Once the dependencies are installed, you can start the backend server.

1. Ensure you are in the `backend` folder (and your virtual environment is active if you created one).
2. Run the following command:
   ```bash
   uvicorn main:app --reload
   ```
3. The backend server should now be running at `http://127.0.0.1:8000` (or `http://localhost:8000`).

## 3. How to Run the Frontend Locally

Since the frontend is built with plain HTML, CSS, and JS, you don't need a complex server to run it.

1. Open the `frontend` folder.
2. Simply double-click the `index.html` file to open it in your web browser.
3. **Alternative**: If you have Python installed, you can run a simple HTTP server from the `frontend` directory:
   ```bash
   cd frontend
   python -m http.server 8080
   ```
   Then open your browser and go to `http://localhost:8080`.

## 4. How the Frontend Communicates with the Backend

1. When you click "Load Events", the frontend JavaScript (`script.js`) uses the `fetch()` API to make a `GET` request to `http://localhost:8000/api/events`.
2. The FastAPI backend receives this request and returns the sample events as JSON.
3. The frontend receives the JSON data and dynamically updates the HTML to display the list of events.
4. When you submit the registration form, the frontend makes a `POST` request to `http://localhost:8000/api/register` with the name and email you provided.
5. The backend (`main.py`) processes this data and returns a success message, which the frontend displays to the user.
6. **CORS (Cross-Origin Resource Sharing)** is enabled in the backend to allow requests coming from the frontend (which is likely running on a different port or origin) without being blocked by the browser's security policies.

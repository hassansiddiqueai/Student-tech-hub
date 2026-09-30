from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS so the frontend can communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Sample event data
events_data = [
    {"id": 1, "title": "Intro to Web Development", "date": "2026-10-05", "location": "Room 101"},
    {"id": 2, "title": "Machine Learning Basics", "date": "2026-10-12", "location": "Auditorium"},
    {"id": 3, "title": "Hackathon 2026", "date": "2026-11-01", "location": "Main Campus"},
]

class Registration(BaseModel):
    name: str
    email: str

@app.get("/api/events")
async def get_events():
    """Return a list of upcoming technical events."""
    return events_data

@app.post("/api/register")
async def register_student(registration: Registration):
    """Register a student for the Tech Hub."""
    # In a real app, you would save this to a database
    print(f"Registered student: {registration.name} ({registration.email})")
    return {"message": "Registration successful!", "user": registration.name}

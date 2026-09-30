const BACKEND_URL = 'http://localhost:8000';

document.addEventListener('DOMContentLoaded', () => {
    const loadEventsBtn = document.getElementById('load-events-btn');
    const eventsList = document.getElementById('events-list');
    const registrationForm = document.getElementById('registration-form');
    const registrationMessage = document.getElementById('registration-message');

    // Load Events
    loadEventsBtn.addEventListener('click', async () => {
        try {
            eventsList.innerHTML = '<li>Loading events...</li>';
            const response = await fetch(`${BACKEND_URL}/api/events`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }

            const events = await response.json();
            eventsList.innerHTML = ''; // Clear loading message

            if (events.length === 0) {
                eventsList.innerHTML = '<li>No upcoming events found.</li>';
                return;
            }

            events.forEach(event => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${event.title}</strong> - ${event.date} (${event.location})`;
                eventsList.appendChild(li);
            });
        } catch (error) {
            eventsList.innerHTML = `<li style="color: red;">Error: ${error.message}. Is the backend running?</li>`;
        }
    });

    // Handle Registration
    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent page reload

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        try {
            registrationMessage.textContent = 'Submitting...';
            registrationMessage.className = '';

            const response = await fetch(`${BACKEND_URL}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });

            if (!response.ok) {
                throw new Error('Failed to register');
            }

            const result = await response.json();
            registrationMessage.textContent = result.message;
            registrationMessage.className = 'success';
            registrationForm.reset(); // Clear form fields
        } catch (error) {
            registrationMessage.textContent = `Error: ${error.message}. Is the backend running?`;
            registrationMessage.className = 'error';
        }
    });
});

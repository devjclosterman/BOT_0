const express = require('express');
const { processQuery } = require('./core/assistant.js');
const { addReminder, getReminders } = require('./services/reminderService');
const app = express();
const PORT = process.env.PORT || 3000;

// Correctly serve static files from the 'public' directory
app.use(express.json());// Support JSON-encoded bodies
app.use(express.static('public'));// Correctly serve static files from the 'public' directory

app.post('/query', async (req, res) => {
    const { query } = req.body;
    const response = await processQuery(query);
    res.json({ message: response });
});

app.post('/reminders', (req, res) => {
    const { reminder } = req.body;
    const addReminder = addReminder(reminder);
    res.json({ reminder: addReminder });
});

app.get('/reminders', (req, res) => {
    res.json({ reminders: getReminders() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

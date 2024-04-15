const reminders = [];

const addReminder = (reminder) => {
    reminders.push(reminder);
    return reminder;
}

const getReminders = () => {
    return reminders;
};

module.exports = {
    addReminder,
    getReminders
};
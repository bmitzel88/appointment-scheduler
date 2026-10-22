// Import the express module
import express from 'express';

// Create an instance
const app = express();

// Define a port number
const PORT = 3003;

// Array to store appointments
const appointments = [];

// Enable static file serving
app.use(express.static('public'));

// App middleware to allow the app to parse form data
// Access form data through req.body
app.use(express.urlencoded({ extended: true }));

// Define a default route ("/")
app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.post('/submit-appointment', (req, res) => {
    const appointment = req.body;
    
    console.log(appointment);

    // Add appointment to the array of appointments
    appointments.push(appointment);
    console.log(appointments);

    // Show confirm page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`)
})


// Start server on designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

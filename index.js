import axios from 'axios';
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import url from 'url';

const app = express();
// Load environment variables from .env file into process.env
dotenv.config();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
// Set 'views' folder as the default location for EJS templates
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

const username = process.env.ZD_EMAIL;
const password = process.env.PASSWORD;
const credentials = `${username}:${password}`;
console.log(credentials);
// Encode the credentials string to Base64
const base64Credentials = Buffer.from(credentials).toString('base64');

// Create the Authorization header
const authorizationHeader = `Basic ${base64Credentials}`;

app.get('/', async function (req, res) {
    try {
        return res.render('index');
    } catch (error) {
        console.error("Error from auth controller register:", error);
        return res.status(500).send({
            status: false,
            error: true,
            content: error,
        });
    }
});

app.post('/', async (req, res) => {
    try {
        let { subject, description, priority, department, operation_team, catalog, sub_catalog } = req.body;

        var createTicket = {
            method: 'POST',
            url: process.env.BASE_URL + '/api/v2/tickets',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorizationHeader,
            },
            data: JSON.stringify({
                "ticket": {
                    "subject": subject,
                    "description": description,
                    "priority": priority,
                    "custom_fields": [
                        {
                            "id": 18331756667793, // Department
                            "value": department
                        },
                        {
                            "id": 18332381041809, // Operation Team
                            "value": operation_team
                        },
                        {
                            "id": 18332300568593, // Catalog
                            "value": catalog
                        },
                        {
                            "id": 18332356460817, // Sub-Catalog
                            "value": sub_catalog
                        }
                    ]
                }
            }),
        };
        await axios(createTicket)
        return res.redirect('/');
    } catch (error) {
        console.error("Error from auth controller Ticket:", error);
        return res.status(500).send({
            status: false,
            error: true,
            content: error,
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log('listening on *:' + process.env.PORT);
})

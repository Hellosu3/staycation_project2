// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
// Dependencies
const mongoose = require('mongoose');
const Staycation = require('./models/staycation.js')

// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
//Body parser: Add JSON data from request to the request object
app.use(express.json())

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Define a handler for the POST /staycations endpoint
app.post('/staycations', async (req, res) => {
    try {
      // Create a new staycation instance from the request body using Mongoose
      const createdStaycation = await Staycation.create(req.body);
      // Return the created staycation as the response
      res.status(201).json(createdStaycation);
    } catch (err) {
      // Handle any errors that occur during the save operation
      res.status(500).json({ error: err.message });
    }
  });

// New
app.get('/staycations/new', (req, res) => {
	res.render('new.ejs');
});
app.get('/staycations', (req, res)=>{
    Staycation.find({}, (error, allStaycations)=>{
        res.render('index.ejs', {
            staycations: allStaycations
        })
    })
  
});


app.get('/staycations/seed', (req, res) => {
	Staycation.create([
	  {
		restaurant: "Old Fisherman's Grotto",
		description: "Bustling spot for seafood serves clam chowder with water views and a side of old school elegance",
		img: "https://i.imgur.com/9sdN4uW.jpg",
		location: "Monterey, CA",
		phone: 8313754604,
		rating: 4.7,
		cuisine: "Seafood, Italian"
	  },
	  {
		restaurant: "Nepenthe",
		description: "Eatery perched on a Big Sur cliffside offering California fare and a terrace with breathtaking views",
		img: "https://i.imgur.com/uwcyIGF.jpg",
		location: "Big Sur, CA",
		phone: 8316672345,
		rating: 4.5,
		cuisine: "American"
	  },
	  {
		restaurant: "Bestia",
		description: "Trendy Italian restaurant from an acclaimed husband & wife team, highlights creative seasonal flare",
		img: "https://i.imgur.com/DJsTOvc.jpg",
		location: "Los Angeles, CA",
		phone: 2135145724,
		rating: 4.6,
		cuisine: "Italian"
	  },
	  {
		restaurant: "The French Laundry",
		description: "The French Laundry is probably the most famous and well-known restaurant, with three Michelin stars, in Napa. The stone farmhouse setting is beyond idyllic, and the food is truly worth the hype...",
		img: "https://i.imgur.com/hYUAr6Z.jpg",
		location: "Napa Valley, CA",
		phone: 7079442380,
		rating: 4.6,
		cuisine: "French"
	  },
      {
		restaurant: "San Diego",
		description: "The French Laundry is probably the most famous and well-known restaurant with three Michelin stars, in Napa by Chef Thomas Keller. The stone farmhouse setting is beyond idyllic, and the food is truly worth the hype...",
		img: "https://i.imgur.com/hYUAr6Z.jpg",
		location: "Napa Valley, CA",
		phone: 7079442380,
		rating: 4.6,
		cuisine: "French"
	  },

	], (err, data) => {
	  if (err) {
		console.log(err);
		res.send("Error seeding database.");
	  } else {
		console.log("Database seeded successfully.");
		res.redirect('/staycations');
	  }
	});
  });
  

// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));

// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const staycationsController = require('./controllers/staycations.js');
const session = require('express-session');
// Dependencies
const mongoose = require('mongoose');
const staycation = require('./models/staycation.js');

const SESSION_SECRET = process.env.SESSION_SECRET
console.log('session')
console.log('session_secret')
//session with secret
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))



// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
//Body parser: Add JSON data from request to the request object
app.use(express.json())
//delete
app.use(methodOverride('_method'))
app.use('/staycations', staycationsController)

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

// // Define a handler for the POST /staycations endpoint
// app.post('/staycations', async (req, res) => {
//     try {
//       // Create a new staycation instance from the request body using Mongoose
//       const createdStaycation = await Staycation.create(req.body);
//       // Return the created staycation as the response
//       res.status(201).json(createdStaycation);
//     } catch (err) {
//       // Handle any errors that occur during the save operation
//       res.status(500).json({ error: err.message });
//     }
//   });

// // New
// app.get('/staycations/new', (req, res) => {
// 	res.render('new.ejs');
// });

// //Show
// app.get('/staycations/:id', async (req, res) => {
//     try {
  
//       const foundStaycation = await Staycation.findById(req.params.id);
//       if (foundStaycation) {
        
//         res.render('show.ejs', { staycation: foundStaycation });
//       } else {
        
//         res.status(404).json({ error: 'Staycation not found' });
//       }
//     } catch (err) {

//       res.status(500).json({ error: err.message });
//     }
//   });

  

// app.get('/staycations', (req, res)=>{
//     Staycation.find({}, (error, allStaycations)=>{
//         res.render('index.ejs', {
//             staycations: allStaycations
//         })
//     })

// //edit
// app.get('/staycations/:id/edit', (req, res)=>{
//         Staycation.findById(req.params.id, (err, foundStaycation)=>{ 
//             res.render(
//                 'edit.ejs',
//                 {
//                     staycation: foundStaycation 
//                 }
//             )
//         })
//     })
    
// });



// //delete
// app.delete('/staycations/:id', (req, res)=>{
//     Staycation.findByIdAndRemove(req.params.id, (err, data)=>{
//         if (err) {
//             console.log(err);
//             res.redirect('/staycations');
//         } else {
//             res.redirect('/staycations');
//         }
//     });
// });

// //edit
// app.put('/staycations/:id', async (req, res) => {
//     try {
//       const updatedStaycation = await Staycation.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//       );
//       res.redirect('/staycations');
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });
  

// app.get('/staycations/seed', (req, res) => {
// 	Staycation.create([
// 	  {
// 		restaurant: "Old Fisherman's Grotto",
// 		description: "Bustling spot for seafood serves clam chowder with water views and a side of old school elegance",
// 		img: "https://i.imgur.com/9sdN4uW.jpg",
// 		location: "Monterey, CA",
// 		phone: 8313754604,
// 		rating: 4.7,
// 		cuisine: "Seafood, Italian",
//         address: "39 Fisherman's Wharf, Monterey, California 93940"
// 	  },
// 	  {
// 		restaurant: "Nepenthe",
// 		description: "Eatery perched on a Big Sur cliffside offering California fare and a terrace with breathtaking views",
// 		img: "https://i.imgur.com/uwcyIGF.jpg",
// 		location: "Big Sur, CA",
// 		phone: 8316672345,
// 		rating: 4.5,
// 		cuisine: "American",
//         address: "48510 Highway One, Big Sur, California 93920"
// 	  },
// 	  {
// 		restaurant: "Bestia",
// 		description: "Trendy Italian restaurant from an acclaimed husband & wife team, highlights creative seasonal flare",
// 		img: "https://i.imgur.com/DJsTOvc.jpg",
// 		location: "Los Angeles, CA",
// 		phone: 2135145724,
// 		rating: 4.6,
// 		cuisine: "Italian",
//         address: "2121 7th Place Los Angeles CA, 90021"
// 	  },
// 	  {
// 		restaurant: "The French Laundry",
// 		description: "The French Laundry is probably the most famous and well-known restaurant, with three Michelin stars, in Napa. The stone farmhouse setting is beyond idyllic, and the food is truly worth the hype...",
// 		img: "https://i.imgur.com/hYUAr6Z.jpg",
// 		location: "Napa Valley, CA",
// 		phone: 7079442380,
// 		rating: 4.6,
// 		cuisine: "French",
//         address: "6640 Washington st, Yountville, CA 94599",
// 	  },
//       {
// 		restaurant: "Lucha Libre",
// 		description: "Blending traditional Mexican food with unique ingredients giving you flavors that will entertain your palate",
// 		img: "https://i.imgur.com/q8m81gm.jpg",
// 		location: "San Diego, CA",
// 		phone: 6194871520,
// 		rating: 4.3,
// 		cuisine: "Mexican",
//         address: "3016 University Ave San Diego, CA 92103",
// 	  },
//       {
// 		restaurant: "Brophy Bros",
// 		description: "Harbor views, fresh seafood, and bustling crowd",
// 		img: "https://i.imgur.com/l5Of7d3.jpg",
// 		location: "Santa Barbara, CA",
// 		phone: 8059664418,
// 		rating: 4.5,
// 		cuisine: "Seafood, Cocktail Bars, Sandwiches",
//         address: "119 Harbor Way Santa Barbara, CA 93109",
        
// 	  },

// 	], (err, data) => {
// 	  if (err) {
// 		console.log(err);
// 		res.send("Error seeding database.");
// 	  } else {
// 		console.log("Database seeded successfully.");
// 		res.redirect('/staycations');
// 	  }
// 	});
//   });
  


  

// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));

const express = require('express');
const router = express.Router()
const Staycation = require('../models/staycation.js');

// Define a handler for the POST /staycations endpoint
router.post('/', async (req, res) => {
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
router.get('/new', (req, res) => {
	res.render('new.ejs');
});

//Show
router.get('/:id', async (req, res) => {
    try {
  
      const foundStaycation = await Staycation.findById(req.params.id);
      if (foundStaycation) {
        
        res.render('show.ejs', { staycation: foundStaycation });
      } else {
        
        res.status(404).json({ error: 'Staycation not found' });
      }
    } catch (err) {

      res.status(500).json({ error: err.message });
    }
  });

  

router.get('/', (req, res)=>{
    Staycation.find({}, (error, allStaycations)=>{
        res.render('index.ejs', {
            staycations: allStaycations
        })
    })

//edit
router.get('/:id/edit', (req, res)=>{
        Staycation.findById(req.params.id, (err, foundStaycation)=>{ 
            res.render(
                'edit.ejs',
                {
                    staycation: foundStaycation 
                }
            )
        })
    })
    
});



//delete
router.delete('/:id', (req, res)=>{
    Staycation.findByIdAndRemove(req.params.id, (err, data)=>{
        if (err) {
            console.log(err);
            res.redirect('/staycations');
        } else {
            res.redirect('/staycations');
        }
    });
});

//edit
router.put('/:id', async (req, res) => {
    try {
      const updatedStaycation = await Staycation.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.redirect('/staycations');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

router.get('/seed', (req, res) => {
	Staycation.create([
	  {
		restaurant: "Old Fisherman's Grotto",
		description: "Bustling spot for seafood serves clam chowder with water views and a side of old school elegance",
		img: "https://i.imgur.com/od9ticf.jpg",
        cityImg: "https://i.imgur.com/gADo0mF.png",
		location: "Monterey, CA",
		phone: 8313754604,
		rating: 4.7,
		cuisine: "Seafood, Italian",
        address: "39 Fisherman's Wharf, Monterey, California 93940",
        price: "$10-$50",
        hours: "11am - 7pm"
	  },
	  {
		restaurant: "Nepenthe",
		description: "Eatery perched on a Big Sur cliffside offering California fare and a terrace with breathtaking views",
		img: "https://i.imgur.com/uwcyIGF.jpg",
        cityImg: "https://i.imgur.com/bhqKqJF.jpg",
		location: "Big Sur, CA",
		phone: 8316672345,
		rating: 4.5,
		cuisine: "American",
        address: "48510 Highway One, Big Sur, California 93920",
        price: "$20-$60",
        hours: "11:30am - 10pm"
	  },
	  {
		restaurant: "Bestia",
		description: "Trendy Italian restaurant from an acclaimed husband & wife team, highlights creative seasonal flare",
		img: "https://i.imgur.com/DJsTOvc.jpg",
        cityImg: "https://i.imgur.com/YIFwwRJ.jpg",
		location: "Los Angeles, CA",
		phone: 2135145724,
		rating: 4.6,
		cuisine: "Italian",
        address: "2121 7th Place Los Angeles CA, 90021",
        price: "$9-$190",
        hours: "5pm - 11pm"
	  },
	  {
		restaurant: "The French Laundry",
		description: "The French Laundry is probably the most famous and well-known restaurant, with three Michelin stars, in Napa. The stone farmhouse setting is beyond idyllic, and the food is truly worth the hype...",
		img: "https://i.imgur.com/hYUAr6Z.jpg",
        cityImg: "https://i.imgur.com/UUVHskQ.jpg",
		location: "Napa Valley, CA",
		phone: 7079442380,
		rating: 4.6,
		cuisine: "French",
        address: "6640 Washington st, Yountville, CA 94599",
        price: "$350 per person; tasting menu",
        hours: "11am - 6pm"
	  },
      {
		restaurant: "Lucha Libre",
		description: "Blending traditional Mexican food with unique ingredients giving you flavors that will entertain your palate",
		img: "https://i.imgur.com/q8m81gm.jpg",
        cityImg: "https://i.imgur.com/JjM45Ww.jpg",
		location: "San Diego, CA",
		phone: 6194871520,
		rating: 4.3,
		cuisine: "Mexican",
        address: "3016 University Ave San Diego, CA 92103",
        price: "$5-$20",
        hours: "11am - 9pm"
	  },
      {
		restaurant: "Brophy Bros",
		description: "Harbor views, fresh seafood, and bustling crowd",
		img: "https://i.imgur.com/l5Of7d3.jpg",
        cityImg: "https://i.imgur.com/IbV4HJo.jpg",
		location: "Santa Barbara, CA",
		phone: 8059664418,
		rating: 4.5,
		cuisine: "Seafood, Cocktail Bars, Sandwiches",
        address: "119 Harbor Way Santa Barbara, CA 93109",
        price: "S20-$50",
        hours: "11am - 10pm"
        
	  },

	], (err, data) => {
	  if (err) {
		console.log(err);
		res.send("Error seeding database.");
	  } else {
		console.log("Database seeded successfully.");
		res.redirect('/');
	  }
	});
  });
  


  



module.exports = router;

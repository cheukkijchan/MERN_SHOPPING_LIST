// MERN STACK VIDEO [2]

const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route    GET api/items
// @desc     Get All Items
// @access   Public
router.get('/', (req, res)=> {
	Item.find()
		.sort({date: -1}) // -1 for desending
		.then(items => res.json(items))   
});

// @route    POST api/items
// @desc     Creat an Item
// @access   Public
router.post('/', (req, res)=> {
	const newItem = new Item({
		//req body-parser to parse the POST request
		name: req.body.name
	});
	// mongoose object to we can use .save
	newItem
		.save()
		.then(item => res.json(item));
});


// @route    delete api/items/:id
// @desc     Delete A Item
// @access   Public
router.delete('/:id', (req, res)=> {
	Item.findById(req.params.id)
		.then(item => item.remove().then(()=>res.json({success: true})))
		.catch(err => res.status(404).json({success: false}));
});

module.exports = router;

const express = require('express'),
    router = express.Router(),
    itemsController = require('../controllers/itemsController');


// ITEMS
router.get("/items/:id?", itemsController.get);
router.post("/items", itemsController.post);
router.delete("/items/:id?", itemsController.delete);
router.get("/search/:search?", itemsController.search);

module.exports = router;
const express = require('express'),
    router = express.Router(),
    itemsController = require('../controllers/itemsController');


/**
 * ROUTING
 */

// ITEMS
router.get("/items", itemsController.get);
router.post("/items", itemsController.post);

module.exports = router;
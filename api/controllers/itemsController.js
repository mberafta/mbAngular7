const mockDb = require('../db/mockDb'),
    items = [...mockDb.items];

var clientItems = [...items];

module.exports = {
    get: (req, res) => {
        let idParam = req.param.id;

        try {
            let responseData = idParam ? items.find(i => i.id == idParam) : items;
            res.status(200);
            res.json(responseData);
        }
        catch (e) {
            res.status(500);
            res.json(e);
        }

    },
    post: (req, res) => {
        try {
            let len = items.length,
                newItem = {
                    id: "it" + len,
                    name: req.body.name,
                    details: req.body.details
                };

            res.status(200);
            res.json(newItem);
        }
        catch (e) {
            res.status(400);
            res.json(e);
        }
    }
};
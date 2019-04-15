const mockDb = require('../db/mockDb'),
    uuid = require('uuid/v4'),
    items = [...mockDb.items];

var clientItems = [...items];

module.exports = {
    get: (req, res) => {
        let idParam = req.query['id'];
        try {
            let responseData = idParam ? clientItems.filter(i => i.id == idParam) : clientItems;
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
                    id: uuid().toString(),
                    name: req.body.name,
                    details: req.body.details
                };

            clientItems.splice(0, 0, newItem);

            console.log(clientItems);

            res.status(200);
            res.json(newItem);
        }
        catch (e) {
            res.status(400);
            res.json(e);
        }
    },
    delete: (req, res) => {
        try {
            let idParam = req.query['id'];

            console.log("Paramètre reçu", idParam);

            if (idParam) {
                let existingItem = clientItems.find(item => item.id == idParam.toString());
                if (existingItem) {
                    clientItems = [...clientItems].filter(item => item.id !== idParam);
                    res.status(200);
                    res.json(existingItem);
                }
                else {
                    res.status(400);
                    res.json({ error: "Aucun item n'a été trouvé avec l'id " + idParam });
                }
            }
            else {
                res.status(400);
                res.json({ error: "L'id de l'élément à effacer est introuvable." });
            }
        }
        catch (e) {
            res.status(500);
            res.json(e);
        }
    },
    search: (req, res) => {
        try {
            let searchParam = req.query['search'],
                searchResult = clientItems.filter(c => c.name.match(searchParam) || c.details.match(searchParam));

            res.status(200);
            res.json(searchResult);
        }
        catch (e) {
            res.status(500);
            res.json({
                message: e.toString()
            });
        }
    }
};
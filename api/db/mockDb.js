var uuid = require('uuid/v4');

const items = [];

for (let i = 0; i < 25; i++) {
    items.push({
        id: uuid(),
        name: "Item " + (i + 1),
        details: "Descriptionb de l'item " + (i + 1)
    });
}

module.exports = {
    items: items
};
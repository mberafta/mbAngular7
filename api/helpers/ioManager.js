const CLIENT_EVENTS = {
  test:"testFromClient"  
};

const SERVER_EVENTS = {
    test:"testFromServer"
};

module.exports.configure = function (io) {

    io.set('origins', '*:*');

    io.on("connection", socket => {

        console.log('io connected');

        socket.on('testFromClient', (msg) => {
            socket.emit(SERVER_EVENTS.test, msg);
        });

    });
};